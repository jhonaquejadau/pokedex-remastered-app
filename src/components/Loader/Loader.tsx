import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-orange-500">
      <CircularProgress />
    </div>
  );
};

export default Loader;
