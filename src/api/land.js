import { CATEGORY_ENUM, PROPERTY_TYPE_ENUM } from "@/lib/enum";
import { useAuthStore } from "@/store/auth";

const useLandApi = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const { getAuthToken, logout } = useAuthStore();

  const create = async (
    props = {
      category: "",
      location: "",
      title: "",
      description: "",
      price: "",
      price_unit: "",
      payment_period: "",
      condition: "",
      legal_documents: "",
      nearby_facilities: "",
      land_type: "",
      plot_size: "",
      zoning: "",
      topography: "",
      utilities: "",
      payment_period: "",
      access_roads: "",
      development_status: "",
      development_status: "",
      images: [],
    }
  ) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const formdata = new FormData();
    formdata.append("category", props.category);
    formdata.append("property_type", PROPERTY_TYPE_ENUM.LAND);
    formdata.append("title", props.title);
    formdata.append("street_id", props.location);
    formdata.append("description", props.description);
    formdata.append("price", props.price);
    formdata.append("price_unit", props.price_unit);

    if (props.category === CATEGORY_ENUM.RENTAL) {
      formdata.append("payment_period", props.payment_period);
    }

    formdata.append("condition", props.condition);
    formdata.append("legal_documents", props.legal_documents);
    formdata.append("nearby_facilities", props.nearby_facilities);

    props.images.forEach((image) => {
      formdata.append("images", image);
    });

    formdata.append("land_type", props.land_type);
    formdata.append("plot_size", props.plot_size);
    formdata.append("living_rooms", props.living_rooms);
    formdata.append("zoning", props.zoning);
    formdata.append("topography", props.topography);
    formdata.append("utilities", props.utilities);
    formdata.append("access_roads", props.access_roads);
    formdata.append("development_status", props.development_status);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${apiUrl}/land/`, requestOptions);

      if (!response.ok) {
        const errorDetail = await response.json();
        console.log(errorDetail);
        if (response.status === 401) {
          logout();
          return {
            success: false,
            code: response.status,
            message: errorDetail.detail,
          };
        }
        console.log(response);
        throw new Error(errorDetail);
      }

      const result = await response.json();
      return { success: true, code: response.status, message: result.detail };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return { create };
};

export default useLandApi;
