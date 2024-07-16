import { useAuthStore } from "@/store/auth";

const useUserApi = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const { getAuthToken, logout } = useAuthStore();

  const createAccount = async ({
    birth_date,
    company,
    email,
    first_name,
    last_name,
    nida_file,
    nida_number,
    passport,
    password,
    phone,
  }) => {
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("birth_date", birth_date);
    formData.append("nida_number", nida_number);
    formData.append("password", password);
    formData.append("company", company);
    formData.append("passport", passport);
    formData.append("nida_file", nida_file);

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${apiUrl}/auth/register`, requestOptions);

      if (!response.ok) {
        const errorDetail = await response.json();
        console.log(errorDetail);

        if (response.status === 400) {
          console.log(errorDetail.detail);
          return {
            success: false,
            message: errorDetail.detail,
            validationError: errorDetail,
          };
        }
        throw new Error(`Error: ${errorDetail.detail}`);
      }

      const res = await response.json();

      return { success: true, message: res.detail };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occured" };
    }
  };

  const active = async ({ user_id }) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const fetchUrl = new URL(`${apiUrl}/user/active`);

    fetchUrl.searchParams.append("user_id", user_id);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(fetchUrl, requestOptions);

      if (!response.ok) {
        const errorDetail = await response.json();
        console.log(errorDetail);

        if (response.status === 400) {
          console.log(errorDetail.detail);
          return {
            success: false,
            code: response.status,
            message: errorDetail.detail,
          };
        }
        throw new Error(`Error: ${errorDetail.detail}`);
      }

      const res = await response.json();

      return { success: true, code: response.status, message: res.detail };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occured" };
    }
  };

  return { createAccount, active };
};

export default useUserApi;
