import React from "react";
import { useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import { getRecipeList } from '../../redux/actions/index'
import '../../layout.css'

let prevId = 1
export function ListRecipe({allrecipes}){
    const dispatch = useDispatch();

    //DESPACHO LA ACCION DE BUSCAR TODAS LAS RECETS
    useEffect(() => {
        dispatch(getRecipeList())
    }, [dispatch]);

    //RENDERIZO MARCO CONTENEDOR DE LAS CARDS DE LAS RECETAS
    return(

        <div class="container">
            <header>
                {/* <div class='container__headerimage'>.<img width="500" height="300"></img></div> */}
            </header>
            <main class="container__main">
                {/*<!-- Left sidebar -->*/}
                <aside class="container__left"></aside>

                {/*<!-- Main content -->*/}
                <article></article>
                    <divc class="container__middle">
                        {
                            //VALIDO QUE EXISTAN RECCETAS QUE MOSTRAR Y MAPEO EL ARREGLO RESULTANTE
                            allrecipes && allrecipes.map(r=><div key={prevId ++}>
                                {/* LLAMO ALCOMPONENTE QUE RENDERIZA LAS CARDS DE LAS RECETAS */}
                                <RecipeCard key={r.id} id={r.id} image={r.image} name={r.name} diet={r.diet} hs={r.hs} />
                                <br/>
                            </div>)
                        }
                    </divc> 

                { /*<!-- Right sidebar -->*/}
                <aside class="container__right"></aside>
            </main>
            <footer>
                ...
            </footer>
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