import React from "react"
import'./Button.css';
import { Link } from "react-router-dom";

export default function IniButon() {
    return(
        <React.Fragment>

        <div id="clearfix">
            <div id="box">
            <p></p>
            </div>

            <div id="box">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>                                             
                <div id="inibox">
                    <div > 
                        <div id='tittlefont'>Recipedia!</div>
                        <br/>
                        <div id='introfont'>Share your recipes or find the one you are looking for to try something new!</div>
                        <br/>
                        <div id='intro_contfont'><strong>Share - Search - Cook</strong></div>
                        <br/>     
                        <Link id='buttonconteiner' to='/recipes'>
                            <button id='Button'>Lets Go!</button>
                        </Link>                                  
                    </div>
                    <br/>
                </div>
            </div>

            <div id="box">
            <p></p>
            </div>

            <div id="box">
            <p></p>
            </div>

            <div id="box">
            <p></p>
            </div>             
        </div>
        </React.Fragment>
    )
}

