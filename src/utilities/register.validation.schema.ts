import * as Yup from "yup";

const nameRules = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

export const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRules, { message: "Name couldn't contain number o symbols" })
    .required("Name is required"),
  nickname: Yup.string()
    .matches(nameRules, {
      message: "Nickame couldn't contain number o symbols",
    })
    .required("Nickname is required!!"),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string()
    .matches(passwordRules, {
      message:
        "Password must have five characters, at least one uppercase letter, one lowercase letter and one number",
    })
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords are not equal")
    .required("Please confirm your password"),
});
