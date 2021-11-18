import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemonDetail } from '../../actions';
import Loader from '../Loader/Loader';
import './Detail.scss'

export const Detail = () => {
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const { name } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(name))
    }, [dispatch, name],)

    const { image, life, types, height, attack, hp, speed, weight } = pokemonDetail;

    const truncateString = (str, num) => {
        if (str.length <= num) return str
        return str.slice(0, num) + '...'
    }

    return (
        <>
            {image && types && name ?
                <main className="containerDetail">
                    <div className="detailCard">
                        <h1 className="capitalizeText">{name}</h1>
                        <ul>
                            {types.map(type => (
                                <li type="none" key={type.name} >
                                    {type.name.replace(/\b[a-z]/g, c => c.toUpperCase())}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <img src={image} width={300} height={200} alt={name} />
                        </div>
                    </div>
                    <div className="pokemonData">
                        <section>
                            <p className="titleSection">Pokedex Data</p>
                            <ul type="none" className="pokedexDataList">
                                <li>
                                    <span className="label">Height</span>
                                    <div>
                                        <span className="value">{height / 10}m</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="label">Weight</span>
                                    <div>
                                        <span className="value">{weight / 10}kg</span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <p className="titleSection">Statistics</p>
                            <div>
                                <div><span>{`Life: ${life}`}</span></div>
                                <progress max='255' value={life}>{life}</progress>
                            </div>

                            <div>
                                <div><span>{`Attack: ${attack}`}</span></div>
                                <progress max='255' value={attack}>{attack}</progress>
                            </div>

                            <div>
                                <div><span>{`Defense: ${hp}`}</span></div>
                                <progress max='255' value={hp}>{hp}</progress>
                            </div>

                            <div>
                                <div><span>{`Speed: ${speed}`}</span></div>
                                <progress max='255' value={speed}>{speed}</progress>
                            </div>
                        </section>
                        {/* <div>
                            <span>
                                <h5>#{truncateString(id.toString(),4)}</h5>
                            </span>
                        </div> */}
                    </div>
                </main>
                : <Loader />
            }
        </>
    )
}