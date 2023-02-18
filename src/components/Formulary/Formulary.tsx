import { TextField } from "@mui/material";

const Formulary = ({ onChange, ...inputs }: any) => {
  return (
    <TextField
      className="m-4"
      variant="outlined"
      label={inputs.name}
      {...inputs}
      onChange={onChange}
    />
  );
};

export default Formulary;
