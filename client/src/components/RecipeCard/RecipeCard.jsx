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
      <div class="content_card">
        <div><img src={imgtoshow} alt="" height={200} width={250}/></div>
        <Link to={`/recipes/${id}`}> <h3>{name}</h3> </Link>
        <div><strong>Heath Score: </strong>{hs}</div>
        <div><strong>Diets Recomensation:</strong></div>
        <div> {diet.toString()}
          {/* {
            diet?.map(d => {
              return (
                <div key={prevId++}><strong>{d}</strong></div>
              )
            })
          }   */}
        </div>
      </div>    
    </div>
  )
}