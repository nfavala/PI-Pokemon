import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from "../components/NavBar/NavBar";
import { getPokemons } from '../actions';
import Loader from "../components/Loader/Loader"
import { Pokedex } from "../components/Pokedex/Pokedex";

export const Home = () => {
    const dispatch = useDispatch();
    const pokeTotal = useSelector(state => state.pokemonAll);
    
    useEffect( () => {
        dispatch(getPokemons())
    },[dispatch])

    return(
        <div>
            <NavBar />
            {pokeTotal.length > 0 ? <Pokedex pokeTotal={pokeTotal}/> : <Loader/>}
        </div>
    )
}