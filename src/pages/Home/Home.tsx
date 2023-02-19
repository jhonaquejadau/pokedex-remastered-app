import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../../assets/fondo.png";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <section className="relative w-full h-[89vh] bg-orange-500 border-2 p-[4em]">
      <h1 className="text-slate-200 font-bold text-8xl">WELCOME TO FAN VERSION POKEDEX</h1>
      <p className="text-2xl">Find your favorite... There is <span className="font-bold">1008 pokemons</span> for you to enjoy!</p>
      <p className="w-[40%] mt-16 mb-4 font-[400] text-xl">You'll get information about types, abilities, stats, and wekanesses of each pokemon. Also, try to create an account to save your favorites pokemons and get extra features!</p>
      <Link to="/pokedex">
        <button className="rounded px-6 py-2 shadow-xl border-2 border-white text-white bg-orange-500 font-bold">
          See pokedex
        </button>
      </Link>
      <div className="absolute right-36 bottom-20">
        <img
          src={wallpaper}
          alt="home_background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
