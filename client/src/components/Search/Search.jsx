import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByName } from '../../actions/index';
import pikaSearch from '../../images/pikachu_detective.jpg';
import './Search.scss';

export const Search = ({setPokeCurrent}) => {
    const dispatch = useDispatch();
    const pokeFilter = useSelector(state => state.pokemonFilter);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value) //lo que se ingresa en el input.
    }

    const handleClick = () => {
        dispatch(getPokemonByName(inputValue));
        setInputValue("");
    }

    useEffect(() => {
        setPokeCurrent(pokeFilter)
    }, [pokeFilter, setPokeCurrent])

    return (
        <div className='search'>
            <div>
                <input
                placeholder='Choose your pokemon'
                type= 'text'
                value= {inputValue}
                onChange= {handleInputChange}/>
                <button type="button" onClick={handleClick}><img src={pikaSearch} width='50' height='50' alt='search pokemon'/></button>
            </div>
        </div>
    )
};
