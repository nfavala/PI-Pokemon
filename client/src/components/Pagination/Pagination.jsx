import React, { useState } from 'react';
import './Pagination.scss'

export const Pagination = ({pokeTotal, setPokeCurrent}) => {
    const cards = 9;
    const [currentPage, setCurrentPage] = useState(0);

    const next = () =>{
        const totalPoke = pokeTotal.length;
        const next = currentPage + 1;
        const index = next * cards;
        if(index > totalPoke) return;
        setPokeCurrent([...pokeTotal].splice(index, cards));
        setCurrentPage(next)
    };

    const prev = () => {
        const prev = currentPage - 1;
        if(prev<0) return;
        const index = prev* cards;
        setPokeCurrent([...pokeTotal].splice(index, cards));
        setCurrentPage(prev)
    };

    return(
        <div>
            <div className='prev-next'>
                <button onClick={()=>prev()}>Previous</button>
                <label>{currentPage + 1}</label>
                <button onClick={()=>next()}>Next</button>
            </div>
        </div>
    )
};