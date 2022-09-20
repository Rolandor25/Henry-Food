import React from "react";
import { useEffect } from 'react';
import { useSelector ,useDispatch } from "react-redux";
import { getRecipeDetail } from '../../redux/actions/index'

export default function RecipeDetail(props){
  let dispatch=useDispatch()
  let id_detail= props.match.params.id
  let imgtoshow=""
  let dietstring=""
  let Step_Id=0
  useEffect(() => {
    dispatch(getRecipeDetail(id_detail))
}, [dispatch, id_detail]);

const FullRecipe = useSelector(state => state.detail);
  if (!FullRecipe.image) {
    imgtoshow="https://t3.ftcdn.net/jpg/04/41/73/28/240_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg"
  }else{
    imgtoshow=FullRecipe.image
  }
  if (FullRecipe.diet) {
    let tempdiet=FullRecipe.diet
    dietstring=tempdiet.join(', ')
  }else{
    dietstring=FullRecipe.diet
  }
  return(
    <div>
      {
        FullRecipe ? (<div>
          <div><img src={imgtoshow} alt="" height={400} width={400}/></div>
          <div>{FullRecipe.name}</div>
          <div>Resumen: {FullRecipe.resume}</div>
          <div>Heatlth Score: {FullRecipe.hs}</div>
          <div>Steps: 
           {
              FullRecipe.steps?.map(e => {
                return (
                  <h5 className="Steps" key={Step_Id++}>{e}</h5>
                )
              })
            }    
          </div>
          <br/>
          <div> Diets: {dietstring}</div>
        </div>):null
      }
    </div>
  )
}
