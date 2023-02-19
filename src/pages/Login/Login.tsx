import React from "react";
import { useFormik, Formik } from "formik";
import { FormDataInterface } from "@/models";
import background from "../../assets/login.svg";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { LoginValidationSchema } from "@/utilities/login.validation.schema";

export interface LoginInterface {}

const initialLoginValues: FormDataInterface = {
  email: "",
  password: "",
};

const Login: React.FC<LoginInterface> = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center w-full h-[89vh] text-center">
      <div className="flex flex-col justify-center w-[50%] h-full p-16">
        <h1 className="text-4xl font-bold">WELCOME BACK</h1>
        <p>Login into your acocunt and manage your dahsboard...</p>

        <Formik
          initialValues={initialLoginValues}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
          validationSchema={LoginValidationSchema}
          enableReinitialize
        >
          {({handleSubmit, handleChange, handleBlur, touched, values, errors}) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center w-full py-4 px-10 gap-4"
            >
              <TextField
                type="text"
                name="email"
                label="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email ? true : false}
                helperText={touched.email && errors.email}
              />
              <TextField
                type="password"
                name="password"
                label="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password ? true : false}
                helperText={touched.password && errors.password}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-orange-500 text-white font-bold"
              >
                Login
              </button>
            </form>
          )}
        </Formik>
        <p>
          Don't have an account?{" "}
          <span
            className="text-orange-500 font-bold hover:cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign up
          </span>
        </p>
      </div>
      <div className="w-[50%] bg-slate-200">
        <img
          src={background}
          alt="login_background"
          className="p-6 w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
