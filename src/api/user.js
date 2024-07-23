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

        if (response.status === 401) {
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

  const getBroker = async ({ user_id }) => {
    const fetchUrl = new URL(`${apiUrl}/api/broker`);

    fetchUrl.searchParams.append("user_id", user_id);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(fetchUrl.toString(), requestOptions);

      if (!response.ok) {
        const errorDetail = await response.json();

        if (response.status === 401) {
          return { success: false, message: errorDetail.detail };
        } else if (response.status == 405) {
          return { success: false, message: errorDetail.detail };
        }

        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occurred" };
    }
  };

  const getProfile = async () => {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${getAuthToken}`);

    const fetchUrl = `${apiUrl}/user/profile`;

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    try {
      const response = await fetch(fetchUrl, requestOptions);
      if (!response.ok) {
        const errorDetails = await response.json();

        if (response.status === 401) {
          logout();
          return {
            success: false,
            code: response.status,
            message: errorDetails.detail,
          };
        }

        throw new Error(errorDetails);
      }

      const data = await response.json();

      return { success: true, code: response.status, data: data };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.message };
    }
  };

  const updateProfileData = async ({about_me, company, comment, phone}) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const fetchUrl = new URL(`${apiUrl}/user/update-profile`);

    const formData = new FormData();
    formData.append('about_me', about_me);
    formData.append('comment', comment);
    formData.append('company', company);
    formData.append('phone', phone);


    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };


    try {
      const response = await fetch(fetchUrl, requestOptions);

      if (!response.ok) {
        const errorDetail = await response.json();

        if (response.status === 401) {
          console.log(errorDetail.detail);
          return {
            success: false,
            code: response.status,
            message: errorDetail.detail,
          };
        } else if (response.status === 400) {

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

  const profileNotification = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const fetchUrl = new URL(`${apiUrl}/user/profile-notification`);


    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };


    try {
      const response = await fetch(fetchUrl, requestOptions);

      if (!response.ok) {
        const errorDetail = await response.json();

        if (response.status === 401) {
          console.log(errorDetail.detail);
          return {
            success: false,
            code: response.status,
            message: errorDetail.detail,
          };
        } else if (response.status === 400) {

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
  }

  return { createAccount, active, getBroker, getProfile, updateProfileData, profileNotification };
};

export default useUserApi;
