import React from "react";
import { Link } from "react-router-dom";
import '../../layout.css'
//let prevId = 1;
var imgtoshow=""

export default function RecipeCard({id,image,name,hs,diet}){
  if (!image) {
    imgtoshow="https://t3.ftcdn.net/jpg/04/41/73/28/240_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg"
  }else{
    imgtoshow=image
  }
  return(
    <div > 
      <div className="content_card">
        <img src={imgtoshow} alt="" />
        <Link to={`/recipes/${id}`}> <h3>{name}</h3> </Link>
        <p><strong>Health Score: </strong>{hs}%</p>
        <p><strong>Suggested for these diets:</strong></p>
        <p> {diet.toString()}</p>
      </div>    
    </div>
  )
}