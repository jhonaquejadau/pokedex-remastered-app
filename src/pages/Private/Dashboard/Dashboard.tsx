import { auth } from "@/firebase";
import { PublicRoutes } from "@/models";
import { resetUser } from "@/redux/states/user";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const user = useSelector((store: any) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        dispatcher(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div className="w-full h-[89vh] text-center flex flex-col justify-center items-center">
      <p className="text-4xl">
        WELCOME BACK TO YOUR DASHBOARD, {user?.nickname}{" "}
      </p>
      <button
        onClick={handleSignOut}
        className="bg-orange-500 text-white font-bold px-6 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
