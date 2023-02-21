import { PrivateRoutes } from "@/models";
import { RoutesWithNotFound } from "@/utilities";
import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

export interface PrivateInterface {}

const Dashboard = lazy(() => import("./Dashboard/Dashboard"))

const Private: React.FC<PrivateInterface> = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/pokedex-remastered-app" element={<Navigate to={PrivateRoutes.DASHBOARD}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};

export default Private;
