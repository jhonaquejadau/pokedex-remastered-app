import { TextField } from "@mui/material";
import { useState } from "react";
import background from "../../../../assets/login.svg";

interface FormDataInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormDataInterface>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any, data: FormDataInterface) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex flex-row w-full h-full text-center">
      <div className="flex flex-col justify-center w-[50%] h-full shadow-xl">
        <h1 className="text-4xl">WELCOME BACK</h1>
        <p>Login into your acocunt and manage your dahsboard...</p>
        <form className="flex flex-col items-center gap-4 p-4">
          <TextField
            className="w-full"
            label="name"
            variant="outlined"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
          />
          <TextField
            className="w-full"
            label="email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
          <TextField
            className="w-full"
            label="password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
          />
          <TextField
            className="w-full"
            label="confirmPassword"
            variant="outlined"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            onSubmit={(event) => handleSubmit(event, formData)}
            className="px-6 bg-slate-500 rounded"
          >
            Login
          </button>
        </form>
      </div>
	  <img src={background} alt="background" className="w-[50%]"/>
    </div>
  );
};

export default SignIn;
