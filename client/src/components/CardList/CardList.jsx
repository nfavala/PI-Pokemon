import React from 'react';
import { Card } from '../Card/Card';
import './CardList.scss';

export const CardList = ({pokeCurrent}) => {
    return (
        <div className='cardList'>
            {Array.isArray(pokeCurrent) ? 
                pokeCurrent.map(poke => (
            
                    <Card
                            key={poke.id}
                            name={poke.name}
                            image={poke.image}
                            types={poke.types}
                            />

                ))

                : <Card
                key={pokeCurrent.id}
                name={pokeCurrent.name}
                image={pokeCurrent.image}
                types={pokeCurrent.types}
                />}
        </div>
    )
}

