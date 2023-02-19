import * as Yup from "yup";

const emailRules = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRules, { message: "Please enter a valid email" })
    .required("Email is required!!"),
  password: Yup.string().required("Password is required!!"),
});
