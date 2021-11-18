import React from 'react';
import './landing.scss';
import {Button} from "../components/Button/Button"

export const LandingPage = () => {
    return(
        <div className="landing">
            <Button link={'/home'} name={"Gotta catch 'em all!"} classname={"main"}/>
        </div>
    )
};