const usePropertiesApi = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const getProperties = async ({
    category,
    districtId,
    endPrice,
    initialPrice,
    propertyType,
    regionId,
    streetId,
    url = null,
    broker = "",
  }) => {
    const fetchUrl = new URL(url || `${apiUrl}/api/properties`);

    fetchUrl.searchParams.append("broker", broker);
    fetchUrl.searchParams.append("propertyType", propertyType);
    fetchUrl.searchParams.append("category", category);
    fetchUrl.searchParams.append("regionId", regionId);
    fetchUrl.searchParams.append("districtId", districtId);
    fetchUrl.searchParams.append("streetId", streetId);
    fetchUrl.searchParams.append("initialPrice", initialPrice);
    fetchUrl.searchParams.append("endPrice", endPrice);

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
      const results = data.results;
      const next = data.next;
      const previous = data.previous;
      const count = data.count;

      return {
        success: true,
        data: results,
        nextUrl: next,
        previousUrl: previous,
        count,
      };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Unknown error occurred" };
    }
  };

  const getProperty = async ({ property_id }) => {
    const fetchUrl = new URL(`${apiUrl}/api/property`);

    fetchUrl.searchParams.append("property_id", property_id);

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

  return { getProperties, getProperty };
};

export default usePropertiesApi;
