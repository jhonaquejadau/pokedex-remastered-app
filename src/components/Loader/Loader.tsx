import pokeball from "../../assets/pokeball.svg"

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <img src={pokeball} alt="pokeball" className="animate-spin w-40 h-40"/>
    </div>
  );
};

export default Loader;
