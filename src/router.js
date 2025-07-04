import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import EstatePortal from "./views/EstatePortal.vue";
import Broker from "./views/Broker.vue";
import AdvancedSearch from "./views/AdvancedSearch.vue";
import BrokerInfo from "./views/BrokerInfo.vue";
import Auth from "./views/Auth.vue";
import Manage from "./views/Manage.vue";
import Registration from "./views/Registration.vue";
import House from "./views/House.vue";
import Apartment from "./views/Apartment.vue";
import Room from "./views/Room.vue";
import BussinessFrame from "./views/BusinessFrame.vue";
import Hall from "./views/Hall.vue";
import Land from "./views/Land.vue";
import ResetPassword from "./views/ResetPassword.vue";
import Profile from "./views/Profile.vue";
import Agent from "./views/Agent.vue";
import PropertyInfo from "./views/PropertyInfo.vue";
import MyProperty from "./views/MyProperty.vue";
import { authGuard } from "./utils/auth-guard";

const routes = [
  { path: "/", name: "Estate", component: EstatePortal },
  { path: "/auth", name: "Auth", component: Auth },
  { path: "/register", name: "Register", component: Registration },
  { path: "/broker", name: "Broker", component: Broker },
  { path: "/search", name: "AdvancedSearch", component: AdvancedSearch },
  { path: "/broker/:id", name: "BrokerInfo", component: BrokerInfo },
  {
    path: "/home/manage",
    name: "Manage",
    component: Manage,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/n/house",
    name: "House",
    component: House,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/n/apartment",
    name: "Apartment",
    component: Apartment,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/n/room",
    name: "Room",
    component: Room,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/n/business-frame",
    name: "BussinessFrame",
    component: BussinessFrame,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/n/hall",
    name: "Hall",
    component: Hall,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/n/land",
    name: "Land",
    component: Land,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker/properties",
    name: "Property",
    component: MyProperty,
    beforeEnter: authGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    beforeEnter: authGuard,
  },
  {
    path: "/home/broker",
    name: "Home",
    component: Home,
    beforeEnter: authGuard,
  },

  {
    path: "/home/manage/agents",
    name: "Agent",
    component: Agent,
    beforeEnter: authGuard,
  },
  { path: "/property/:id", name: "PropertyInfo", component: PropertyInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
