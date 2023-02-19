import { auth } from "@/firebase";
import { createUser, EmptyUserState, resetUser } from "@/redux/states/user";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const user = useSelector((store: any) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        dispatcher(createUser(EmptyUserState))
        navigate("/login");
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
