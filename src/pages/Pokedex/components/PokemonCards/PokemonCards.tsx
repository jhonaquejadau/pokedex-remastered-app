import { PokemonInterface } from '@/models';
import React from 'react';

const PokemonCards : React.FC<PokemonInterface> = (props) => {	
	return (
		<div className='text-4xl flex flex-col justify-center items-center h-full border-4'>
			<h1>{props.name}</h1>
			<img src={props.img} alt="img" className='w-48 h-48'/>
		</div>
	)
};

export default PokemonCards;
