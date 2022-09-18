import React from "react";
import { connect } from "react-redux";
import { getRecipeDetail } from '../../redux/actions/index'

export function RecipeDetail(props){

  let params= props.match.params.id
  
  React.useEffect(()=>{
    props.getDetail(params)
  }, [props,params])  

  return(
    <div>
      {
        props.detail ? (<div>
          <div>{props.detail.image}</div>
          <div>{props.detail.name}</div>
          <div>Resumen: {props.detail.resume}</div>
          <div>Heatlth Score: {props.detail.hs}</div>
          <div>Steps: {props.detail.steps}</div>
          <div>Diets: {props.detail.diets}</div>
        </div>):null
     }   
    </div>)
}

function mapStateToProps(state){
  return{
    detail: state.detail,
    recipex: state.recipex
  }
}

function mapDispatchToProps(dispatch){
  return{
    getDetail: id=>dispatch(getRecipeDetail(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetail)