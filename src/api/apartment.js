import { CATEGORY_ENUM, PROPERTY_TYPE_ENUM } from "@/lib/enum";
import { useAuthStore } from "@/store/auth";

const useApartmentApi = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const { getAuthToken, logout } = useAuthStore();

  const create = async (props) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const formdata = new FormData();
    formdata.append("category", props.category);
    formdata.append("property_type", PROPERTY_TYPE_ENUM.APARTMENT);
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
    formdata.append("amenity_name", props.amenities);

    props.images.forEach((image) => {
      formdata.append("images", image);
    });

    formdata.append("bedrooms", props.bedrooms);
    formdata.append("bathrooms", props.bathrooms);
    formdata.append("living_rooms", props.living_rooms);
    formdata.append("floors", props.floors);
    formdata.append("garage_capacity", props.garage_capacity);
    formdata.append("yard_size", props.yard_size);
    formdata.append("yard_type", props.yard_type);
    formdata.append("balcony_size", props.balcony_size);
    formdata.append("parking_spaces", props.parking_spaces);
    formdata.append("corridor_size", props.corridor_size);
    formdata.append("furnishing_status", props.furnishing_status);
    formdata.append("kitchen_type", props.kitchen_type);
    formdata.append("utilities", props.utilities);
    formdata.append("security_features", props.security_features);
    formdata.append("heating_cooling_systems", props.heating_cooling_systems);
    formdata.append("kitchen_count", props.kitchen_count);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${apiUrl}/apartment/`, requestOptions);

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

export default useApartmentApi;
