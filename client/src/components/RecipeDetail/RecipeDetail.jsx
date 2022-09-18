import React from "react";
import { useEffect } from 'react';
import { connect } from "react-redux";
import { getRecipeDetail } from '../../redux/actions/index'

export function RecipeDetail(props){
  
  let id_detail= props.match.params.id
  let imgtoshow=""
  let Det_Id=0
  let Step_Id=0

  useEffect(() => {
    props.GetDeatil(id_detail)
  }, [props,id_detail]);

  if (!props.detail.image) {
    imgtoshow="https://t3.ftcdn.net/jpg/04/41/73/28/240_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg"
  }else{
    imgtoshow=props.detail.image
  }

  return(
    <div>
      {
        props.detail ? (<div>
          <div><img src={imgtoshow} alt="" height={400} width={400}/></div>
          <div>{props.detail.name}</div>
          <div>Resumen: {props.detail.resume}</div>
          <div>Heatlth Score: {props.detail.hs}</div>
          <div>Steps: 
           {
              props.detail.steps?.map(e => {
                return (
                  <h5 className="Steps" key={Step_Id++}>{e}</h5>
                )
              })
            }    
          </div>
         <br/>
          <div> Diets:
            {
              props.detail.diet?.map(e => {
                return (
                  <h5 className="diets" key={Det_Id++}>{e}</h5>
                )
              })
            }             
          </div>
        </div>):null
      }
    </div>
  )
}

function mapStateToProps(state){
  return{
    detail: state.detail,
  }
}

function mapDispatchToProps(dispatch){
  return{
    GetDeatil: id=>dispatch(getRecipeDetail(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetail)