import React from "react";
import NoImage from "./img/NI.jpg";
import { Link } from "react-router-dom";
let prevId = 1;
var imgtoshow=""
export default function RecipeCard({id,image,name,hs,diet}){
  if (!image) {
    imgtoshow=NoImage
  }else{
    imgtoshow=image
  }
  return(
    <div>
      <div><img src={imgtoshow} alt="" height={200} width={200}/></div>
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