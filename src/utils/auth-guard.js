import { useAuthStore } from "../store/auth";

export const authGuard = (to, _from, next) => {
  const authStore = useAuthStore();

  const isAuthenticated = !!authStore.user;

  if (!isAuthenticated) {
    return next({ name: "Auth", replace: true });
  }

  const pathname = to.path;

  if (pathname.startsWith("/home/manage") && !authStore.user?.is_superuser) {
    authStore.logout();
    return next({ name: "Auth", replace: true });
  }

  if (pathname.startsWith("/home/broker") && authStore.user?.is_superuser) {
    authStore.logout();
    return next({ name: "Auth", replace: true });
  }

  return next();
};
