import React, {useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import { Sort } from '../Filters/Filters'
import './Pokedex.scss';

export const Pokedex = ({pokeTotal}) => {
    const cards = 9;
    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal);

    useEffect( () => {
        setPokeCurrent([...pokeTotal].splice(0,cards),pokeCurrent);
    },[pokeTotal])

    return(
        <div className='main-page'>
            <Search setPokeCurrent={setPokeCurrent}/>
            <Sort pokeTotal={pokeTotal} pokeCurrent={pokeCurrent} setPokeCurrent={setPokeCurrent}/>
            {(pokeCurrent.length > 0 || (pokeCurrent.name !== undefined && pokeCurrent.name !== 'Error'))? <CardList pokeCurrent={pokeCurrent}/> : alert("Not found")}
            <Pagination pokeTotal={pokeTotal} setPokeCurrent={setPokeCurrent}/>
        </div>
    )
};