import React from "react";
import { Link } from "react-router-dom";
let prevId = 1;
var imgtoshow=""

export default function RecipeCard({id,image,name,hs,diet}){
  if (!image) {
    imgtoshow="https://t3.ftcdn.net/jpg/04/41/73/28/240_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg"
  }else{
    imgtoshow=image
  }
  return(
    <div>
      <div><img src={imgtoshow} alt="" height={200} width={250}/></div>
      <Link to={`/recipes/${id}`}> {name} </Link>
      <div>Heath Score: {hs}</div>
      <div> Dietas:
        {
          diet?.map(d => {
            return (
              <h6 key={prevId++}>{d}</h6>
            )
          })
        }  
      </div>
    </div>
  )
}