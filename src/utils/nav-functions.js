import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const useNavigationFunctions = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const navigateToBroker = () => {
    router.push({ name: "Broker", replace: false });
  };

  const navigateToEstatePortal = () => {
    router.push({ name: "Estate", replace: false });
  };

  const navigateToAdvancedSearch = () => {
    router.push({ name: "AdvancedSearch", replace: false });
  };

  const navigateToBrokerInfo = (id) => {
    router.push({ name: "BrokerInfo", params: { id }, replace: false });
  };

  const navigateToPropertyInfo = (id) => {
    console.log(id);
    router.push({ name: "PropertyInfo", params: { id }, replace: false });
  };

  const navigateToAuth = () => {
    router.push({ name: "Auth", replace: false });
  };

  const navigateToRegistration = () => {
    router.push({ name: "Register", replace: false });
  };

  const navigateToBrokerHome = () => {
    router.push({ name: "Home", replace: true });
  };

  const navigateToHause = () => {
    router.push({ name: "House", replace: true });
  };

  const navigateToApartment = () => {
    router.push({ name: "Apartment", replace: true });
  };

  const navigateToRoom = () => {
    router.push({ name: "Room", replace: true });
  };

  const navigateToBussinessFrame = () => {
    router.push({ name: "BussinessFrame", replace: true });
  };

  const navigateToHall = () => {
    router.push({ name: "Hall", replace: true });
  };

  const navigateToLand = () => {
    router.push({ name: "Land", replace: true });
  };

  const navigateToProfile = () => {
    router.push({ name: "Profile", replace: true });
  };

  const navigateToResetPassword = () => {
    router.push({ name: "ResetPassword", replace: true });
  };

  const navigateToManage = () => {
    router.push({ name: "Manage", replace: true });
  };

  const navigateToAgents = () => {
    router.push({ name: "Agent", replace: true });
  };

  const signOut = () => {
    logout();
    router.push({ name: "Estate", replace: true });
  };

  return {
    navigateToAgents,
    signOut,
    navigateToResetPassword,
    navigateToProfile,
    navigateToLand,
    navigateToHall,
    navigateToBussinessFrame,
    navigateToRoom,
    navigateToApartment,
    navigateToHause,
    navigateToBrokerHome,
    navigateToManage,
    navigateToBroker,
    navigateToEstatePortal,
    navigateToAdvancedSearch,
    navigateToBrokerInfo,
    navigateToAuth,
    navigateToRegistration,
    navigateToPropertyInfo,
  };
};

export default useNavigationFunctions;
