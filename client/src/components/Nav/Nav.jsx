import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom'

export default function Nav(){
    return (
        <React.Fragment>
            <header id='header'>
            </header>
            <nav id='menu'>
                <ul>
                    <li><NavLink to={'/recipes'}>Home</NavLink></li>
                    <li><NavLink to={'/recipe/create'}>Create Recipe</NavLink></li>
                    <li><NavLink to={'/diets'}>Diets Info</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}
