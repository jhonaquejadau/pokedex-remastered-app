import { setPokemons } from '@/redux/states/pokemons';
import { getPokemonsData } from '@/services/pokemons';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {	

	return <div>
		<h1>HOME WORKING!!</h1>
		<Link to="/pokedex">
		<button className='rounded p-4 bg-orange-500'>GO TO POKEDEX</button>
		</Link>
	</div>;
};

export default Home;
