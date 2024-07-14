import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    authToken: localStorage.getItem("token"),
    user: (() => {
      if (localStorage.getItem("token")) {
        const user = jwtDecode(localStorage.getItem("token"));
        return user;
      }

      return null;
    })(),
  }),
  getters: {
    getAuthToken: (state) => state.authToken,
    getUser: (state) => state.user,
  },
  actions: {
    initializeStore() {
      const token = localStorage.getItem("token");
      if (token) {
        const user = jwtDecode(token);
        this._setAuthToken(token);
        this._setUser(user);
      }
    },
    _setAuthToken(authToken) {
      this.$patch({ authToken });
      if (authToken) {
        localStorage.setItem("token", authToken);
      } else {
        localStorage.removeItem("token");
      }
    },
    _setUser(user) {
      this.$patch({ user });
    },
    async authenticate(email, password) {
      const apiUrl = import.meta.env.VITE_APP_API_URL;

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
        password: password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(`${apiUrl}/auth/`, requestOptions);

        if (!response.ok) {
          const errorDetail = await response.json();

          if (response.status === 401) {
            return { success: false, message: errorDetail.detail };
          } else if (response.status === 403) {
            return { success: false, message: errorDetail.detail };
          } else if (response.status === 400) {
            return { success: false, arrayError: errorDetail };
          }

          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!data || !data.token) {
          return { success: false, message: "Missing token in response" };
        }

        const user = jwtDecode(data.token);

        this._setAuthToken(data.token);
        this._setUser(user);

        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, message: "Unknown error occurred" };
      }
    },
    logout() {
      this.$patch({
        authToken: null,
        user: null,
      });
      localStorage.removeItem("token");
    },
  },
});
