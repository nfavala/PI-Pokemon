import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pokeball from  "../../images/pokeball_nav.png";
import { getPokemons } from "../../actions/index";
import { Button } from '../Button/Button';
import "./NavBar.scss";

export const NavBar = () => {
    const dispatch = useDispatch();
    return(
        <header className="navbar">
         <div className="navbar-header">
            <Link to={"/landing"}><img src={Pokeball} alt="pokeball" height='50' width='50'/></Link>
        </div>
        <div>
            <Link to={"/home"}>
                <button className="homeButton" type = "button" onClick={() => dispatch(getPokemons())}>
                 </button>
            </Link>
        </div>
        <div>
                <Button link={'/create'} name={"Create"} classname={"secondary"}/>
            </div>
        </header>
    )
}