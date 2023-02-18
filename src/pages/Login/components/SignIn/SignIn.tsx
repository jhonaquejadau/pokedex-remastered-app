import { Formulary } from "@/components/Formulary";
import { FormDataInterface } from "@/models";
import { loginFields } from "@/utilities/login.data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../../assets/login.svg";

const initialFormData: FormDataInterface = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataInterface>(initialFormData);

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  console.log(formData);

  return (
    <div className="flex flex-row w-full h-full text-center">
      <div className="flex flex-col justify-center w-[50%] h-full shadow-xl">
        <h1 className="text-4xl">WELCOME BACK</h1>
        <p>Login into your acocunt and manage your dahsboard...</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center gap-4 p-10"
        >
          {loginFields.map((field: any) => {
            return (
              <Formulary key={field.id} {...field} onChange={handleOnChange} />
            );
          })}
          <button className="bg-slate-400 py-1 px-6 w-[50%] mx-auto rounded">
            Login
          </button>
        </form>
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
      <img src={background} alt="background" className="w-[50%]" />
    </div>
  );
};

export default SignIn;
