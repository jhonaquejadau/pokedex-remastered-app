import React from "react";
import { Link } from "react-router-dom";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <section className="w-full h-[90vh]">
      <h1>HOME WORKING!!</h1>
      <Link to="/pokedex">
        <button className="rounded p-4 bg-orange-500">GO TO POKEDEX</button>
      </Link>
    </section>
  );
};

export default Home;
