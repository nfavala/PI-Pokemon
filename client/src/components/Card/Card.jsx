import React from "react";
import{Link} from "react-router-dom";
import "./Card.scss";

 export const Card = ({id, name, image, types}) => {
     console.log(id)
     console.log(name)
    return(
        <div className='pokemonCard'>
                    <div>
                        <h3 className='nameText'>{name}</h3>
                        <h4 className='typeList'>{types}</h4>
                    </div>
                    <Link to={`/detail/${name}`}>
                    <button>
                    <div className='cardImage'>
                        <img src={image} width={170} height={100} alt={name}/>
                    </div>
                </button>
            </Link>
        </div>
    )
};
