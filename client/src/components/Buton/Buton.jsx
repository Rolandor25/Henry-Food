import React from "react"
import { Link } from "react-router-dom";

export default function IniButon() {
    return(
        <React.Fragment>
            <Link to='/recipes'>
                <button>'ENTRAR'</button>
            </Link>
        </React.Fragment>
    )
}