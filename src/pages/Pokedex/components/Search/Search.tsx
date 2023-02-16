import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className="w-full py-8 text-center text-[1.5rem]">
      <p className="text-[2.5rem]">
        <span className="font-bold">1008 </span>Pokemons for you to enjoy!
      </p>
      <p>
        Create a profile or login if you already has one, to see your favorites
        pokemons...
      </p>
      <input
        type="text"
        placeholder="Search pokemon..."
        className="w-[60%] mt-4 border-b-[1px] border-black bg-transparent focus:outline-none focus:placeholder-transparent"
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;


