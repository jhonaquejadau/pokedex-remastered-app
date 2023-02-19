import { auth, db } from "@/firebase";
import { FormDataInterface, RegisterValidationSchema } from "@/models";
import { TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const initialFormData: FormDataInterface = {
  name: "",
  nickname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[89vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Oooh you hasn't acocunt yet!!</h1>
      <p>
        Create your pokemon account and enjoy this powerful pokedex
        application...
      </p>
      <Formik
        initialValues={initialFormData}
        onSubmit={(values, actions) => {

          //Send data from firebase when an user is created
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then( async (userCredential) => {
              try {
                await addDoc(collection(db,'users'), {
                  ...values,
                  token: userCredential.user.uid
                })
              } catch (error) {
                console.error("Error adding user to database", error)
              }
            })
            .catch((error) => {
              console.log(error);
              
            })

          //Navigate to Login when a user would be created
          navigate("/login")

          //Reset form fields
          actions.resetForm();
        }}
        validationSchema={RegisterValidationSchema}
        enableReinitialize
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          errors,
          values,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-[50%] gap-4 shadow-xl p-4"
          >
            <TextField
              type="text"
              name="name"
              label="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name ? true : false}
              helperText={touched.name && errors.name}
            />
            <TextField
              type="text"
              name="nickname"
              label="nickname"
              value={values.nickname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.nickname && errors.nickname ? true : false}
              helperText={touched.nickname && errors.nickname}
            />
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
            <TextField
              type="password"
              name="confirmPassword"
              label="confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.confirmPassword && errors.confirmPassword ? true : false
              }
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <button className="w-[50%] mx-auto px-4 py-2 font-bold bg-orange-500 text-white rounded ">
              Create user
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <span
                className="font-bold text-orange-400 hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
