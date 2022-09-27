import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom'

//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWWMWWMWMWMW
// MENU DE OPCIONES
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWWMWWMWMWMW

export default function Nav(){
    return (
        <React.Fragment>
            <nav id='menu'>
                <ul>
                    <li><NavLink to={'/recipes'}>Home</NavLink></li>
                    <li><NavLink to={'/recipe/create'}>Create Recipe</NavLink></li>
                    <li><NavLink to={'/dietinfo'}>Diets Info</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}
