import React from "react";
import { useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import { getRecipeList } from '../../redux/actions/index'
let prevId = 1

export function ListRecipe({allrecipes}){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeList())
    }, [dispatch]);

    return(
        <div>
            {
                allrecipes && allrecipes.map(r=><div key={prevId ++}>
                    <RecipeCard key={r.id} id={r.id} image={r.image} name={r.name} diet={r.diet} hs={r.hs} />
                    <br/>
                </div>)
            }
        </div>
    )
}

function mapStateToProps(state){
    return{
        allrecipes: state.allrecipes
    }
}

function mapDispatchToProps(dispatch){
    return{
      getList: dispatch(getRecipeList())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ListRecipe)