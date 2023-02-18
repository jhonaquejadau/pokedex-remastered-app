import { Formulary } from "@/components/Formulary";
import { FormDataInterface } from "@/models";
import { registerFields } from "@/utilities/register.data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData: FormDataInterface = {
  name: "",
  nickname: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataInterface>(initialFormData);
  
  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormData(initialFormData);
  };
  
  return (
    <div className="flex flex-col justify-center w-full h-[90vh] text-center">
		<h1 className="font-bold text-4xl">Ooooh, you're new here</h1>
		<p>Create an account and enjoy this powerfull pokedex application</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center gap-4 px-16 py-4"
        >
          {registerFields.map((field: any) => {
            return <Formulary key={field.id} {...field} onChange={handleOnChange} />;
          })}
          <button className="bg-slate-400 py-1 px-6 w-[50%] mx-auto rounded">
            Create user
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <span
            className="font-bold text-yellow-500 hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
    </div>
  );
};

export default SignUp;
