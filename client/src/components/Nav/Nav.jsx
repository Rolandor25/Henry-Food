import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav(){
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><NavLink to={'/recipes'}>Home</NavLink></li>
                    <li><NavLink to={'/recipes/create'}>Create Recipe</NavLink></li>
                    <li><NavLink to={'/diets'}>Diets Info</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>

    );
}
