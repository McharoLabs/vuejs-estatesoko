import { CATEGORY_ENUM, PROPERTY_TYPE_ENUM } from "@/lib/enum";
import { useAuthStore } from "@/store/auth";

const useHouseApi = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const { getAuthToken, logout } = useAuthStore();

  const create = async (props) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAuthToken}`);

    const formdata = new FormData();
    formdata.append("category", props.category);
    formdata.append("property_type", PROPERTY_TYPE_ENUM.HOUSE);
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
    formdata.append("amenity_name", props.amenity_name);

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
      const response = await fetch(`${apiUrl}/house/create`, requestOptions);

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

export default useHouseApi;

// const create = async (props) => {
//   const myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5YmNkZjQ5LThmMjMtNGVmMy1hZGJiLTJlNzA1ZjQyYTExMCIsImlzX3N1cGVydXNlciI6ZmFsc2UsImlzX3N0YWZmIjpmYWxzZSwibmFtZSI6IkdvZGZyZXkgbWNoYXJvIiwicGhvbmUiOiIrMjU1NzQ2NTYxNTQ1IiwiZW1haWwiOiJtY2hhcm9AZ21haWwuY29tIiwibmlkYV9udW1iZXIiOiIxOTk4MDMyMy02NzcwNy0wMDAwMS0yNSIsImJpcnRoX2RhdGUiOiIxOTYwLTA1LTE4IiwicGFzc3BvcnQiOiIvbWVkaWEvdXNlci9iMzk5ZGUzOS04YTRkLTRjODQtYjk4ZC05NTA1NGY0Y2ExZDEuanBnIiwibmlkYV9maWxlIjoiL21lZGlhL2RvYy9iMzk5ZGUzOS04YTRkLTRjODQtYjk4ZC05NTA1NGY0Y2ExZDEuanBnIiwiZXhwIjoxNzIwOTU4MDE5LCJpYXQiOjE3MjA5NTY4MTl9.lOkoqIb_ox_RMuI9Jf1otEnIyo5PSWDH3qITXMbjLEI"
//   );

//   const formdata = new FormData();
//   formdata.append("category", props.category);
//   formdata.append("property_type", props.property_type);
//   formdata.append("title", props.title);
//   formdata.append("street_id", props.street_id);
//   formdata.append("description", props.description);
//   formdata.append("price", props.price);
//   formdata.append("price_unit", props.price_unit);
//   formdata.append("payment_period", props.payment_period);
//   formdata.append("condition", props.condition);
//   formdata.append("legal_documents", props.legal_documents);
//   formdata.append("nearby_facilities", props.nearby_facilities);
//   formdata.append("amenity_name", props.amenity_name);

//   props.images.forEach((image) => {
//     formdata.append("images", image);
//   });

//   formdata.append("bedrooms", props.bedrooms);
//   formdata.append("bathrooms", props.bathrooms);
//   formdata.append("living_rooms", props.living_rooms);
//   formdata.append("floors", props.floors);
//   formdata.append("garage_capacity", props.garage_capacity);
//   formdata.append("yard_size", props.yard_size);
//   formdata.append("yard_type", props.yard_type);
//   formdata.append("balcony_size", props.balcony_size);
//   formdata.append("corridor_size", props.corridor_size);
//   formdata.append("furnishing_status", props.furnishing_status);
//   formdata.append("kitchen_type", props.kitchen_type);
//   formdata.append("utilities", props.utilities);
//   formdata.append("security_features", props.security_features);
//   formdata.append("heating_cooling_systems", props.heating_cooling_systems);
//   formdata.append("priceUnit", props.priceUnit);
//   formdata.append("kitchen_count", props.kitchen_count);

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow",
//   };

//   fetch("http://127.0.0.1:8000/house/create", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// };
