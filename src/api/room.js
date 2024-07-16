import { PROPERTY_TYPE_ENUM } from "@/lib/enum";
import { useAuthStore } from "@/store/auth";

const useRoomApi = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const { getAuthToken, logout } = useAuthStore();

  const create = async (
    props = {
      category: CATEGORY_ENUM.RENTAL,
      location,
      title,
      description,
      price,
      price_unit,
      payment_period,
      condition,
      legal_documents,
      nearby_facilities,

      room_size,
      shared_facilities,
      furnishing_status,
      room_type,
      occupancy,
      utilities,
      floor_level,
      amenities,
      accessbility_features,
      security_features,
      heating_cooling_systems,
      images: [],
    }
  ) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const formdata = new FormData();
    formdata.append("category", props.category);
    formdata.append("property_type", PROPERTY_TYPE_ENUM.ROOM);
    formdata.append("title", props.title);
    formdata.append("street_id", props.location);
    formdata.append("description", props.description);
    formdata.append("price", props.price);
    formdata.append("price_unit", props.price_unit);

    formdata.append("payment_period", props.payment_period);

    formdata.append("condition", props.condition);
    formdata.append("legal_documents", props.legal_documents);
    formdata.append("nearby_facilities", props.nearby_facilities);
    formdata.append("amenity_name", props.amenities);

    props.images.forEach((image) => {
      formdata.append("images", image);
    });

    formdata.append("room_size", props.room_size);
    formdata.append("shared_facilities", props.shared_facilities);
    formdata.append("furnishing_status", props.furnishing_status);
    formdata.append("room_type", props.room_type);
    formdata.append("occupancy", props.occupancy);
    formdata.append("utilities", props.utilities);
    formdata.append("floor_level", props.floor_level);
    formdata.append("accessbility_features", props.accessbility_features);
    formdata.append("security_features", props.security_features);
    formdata.append("heating_cooling_systems", props.heating_cooling_systems);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${apiUrl}/room/`, requestOptions);

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

export default useRoomApi;
