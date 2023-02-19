import { PublicRoutes } from "@/models";
import { StoreInterface } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const userState = useSelector((store: StoreInterface) => store.user);
  
  return userState.name ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default ProtectedRoutes;
