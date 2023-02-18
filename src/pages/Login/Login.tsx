import React from "react";
import { SignIn, SignUp } from "./components";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  return (
    <div className="w-full h-[90vh]">
      <SignIn />
    </div>
  );
};

export default Login;
