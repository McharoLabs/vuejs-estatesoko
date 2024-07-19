const useLocation = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const getRegions = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${authStore.authToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${apiUrl}/api/regions`, requestOptions);

      if (!response.ok) {
        //const errorDetail = await response.json();

        if (response.status === 401) {
        }

        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return { success: true, data: data };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occured" };
    }
  };

  const getRegionDistricts = async (region_id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${authStore.authToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/region-districts/${region_id}`,
        requestOptions
      );

      if (!response.ok) {
        //const errorDetail = await response.json();

        if (response.status === 401) {
        }

        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return { success: true, data: data };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occured" };
    }
  };

  const getDistrictStreets = async (district_id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${authStore.authToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/district-streets/${district_id}`,
        requestOptions
      );

      if (!response.ok) {
        //const errorDetail = await response.json();

        if (response.status === 401) {
        }

        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return { success: true, data: data };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occured" };
    }
  };

  const getLocation = async ({ location_id }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${authStore.authToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/location/${location_id}`,
        requestOptions
      );

      if (!response.ok) {
        //const errorDetail = await response.json();

        if (response.status === 401) {
        }

        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return { success: true, data: data };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occured" };
    }
  };

  return { getRegions, getRegionDistricts, getDistrictStreets, getLocation };
};

export default useLocation;
