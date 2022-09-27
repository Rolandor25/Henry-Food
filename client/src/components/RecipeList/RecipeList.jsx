import React from "react";
import { useState, useEffect } from 'react';
import { connect, useDispatch , useSelector} from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import '../../layout.css'
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';

import { getRecipeList , dietTypeFilter, aplhabeticalSort, scoreSort } from '../../redux/actions';


export function ListRecipe(){

    let prevId = 1
    const AllRecipes = useSelector((state) => state.Recipes);
    const [order,setOrder] = useState('')
    const [page, setPage] = useState(1);
    const [recipesPage] = useState(9);
    
    const quantityRecipesPage = page * recipesPage;
    const firstRecipePage = quantityRecipesPage - recipesPage;
    const showRecipesPage = AllRecipes.slice(firstRecipePage, quantityRecipesPage);
    
    const paged = function(pageNumber) {
        setPage(pageNumber)
    };

    const dispatch = useDispatch();

    //DESPACHO LA ACCION DE BUSCAR TODAS LAS RECETS
    useEffect(() => {
        dispatch(getRecipeList())
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipeList());
        setPage(1);
    }

    function handleDietTypeFilter(e) {
        e.preventDefault();
        dispatch(dietTypeFilter(e.target.value))
        setPage(1);
    }

    function handleAlphabeticalSort(e) {
        e.preventDefault();                
        dispatch(aplhabeticalSort(e.target.value))
        setPage(1);
        setOrder(`Order ${e.target.value}`);
    }
    
    function handleScoreSort(e) {
        e.preventDefault();                
        dispatch(scoreSort(e.target.value));
        setPage(1);
        setOrder(`Order ${e.target.value}`);
    }    

    //RENDERIZO MARCO CONTENEDOR DE LAS CARDS DE LAS RECETAS
    return(
        <div className="conteiner">

            <header className='header'>
            </header>

            <div className="select">
                <label className="filters"><strong>Sort:</strong></label>
                <select className="select" name="alphabetical" onChange={e => handleAlphabeticalSort(e)}>
                    <option defaultValue={'Alphabetical'}></option>
                    <option value="atoz">A to Z</option>
                    <option value="ztoa">Z to A</option>
                </select>
                <label className="filters"><strong>Healt Score:</strong></label>
                <select className="select" name="numerical" onChange={e => handleScoreSort(e)}>
                    <option defaultValue={'Score'}></option>
                    <option value="asc">From Min to Max</option>
                    <option value="desc">From Max to Min</option>
                </select>
                <label className="filters"><strong>Diet Types:</strong></label>
                <select className="select" name="diets" onChange={e => handleDietTypeFilter(e)}>
                    <option defaultValue={'Select...'}></option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Keto</option>
                    <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
                    <option value="lacto vegetarian">Lacto-Vegetarian</option>
                    <option value="low fodmap">Low FODMAP</option>
                    <option value="ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="primal">Primal</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="whole 30">Whole30</option>
                </select>
                <button className="refreshButton" onClick={handleClick}>Refresh</button>

                <SearchBar/>

            </div>


            <main className="conteiner__main">
                {/*<!-- Left sidebar -->*/}
                <aside className="conteiner__left"></aside>

                {/*<!-- Main content -->*/}
                <article></article>
                    <div className="conteiner__middle">
                        {
                            //VALIDO QUE EXISTAN RECCETAS QUE MOSTRAR Y MAPEO EL ARREGLO RESULTANTE
                            showRecipesPage  && showRecipesPage.map(r=><div key={prevId ++}>
                                {/* LLAMO ALCOMPONENTE QUE RENDERIZA LAS CARDS DE LAS RECETAS */}
                                <RecipeCard key={r.id} id={r.id} image={r.image} name={r.name} diet={r.diet} hs={r.hs} />
                                <br/>
                            </div>)
                        }
                    </div> 

                { /*<!-- Right sidebar -->*/}
                <aside className="conteiner__right"></aside>
            </main>
            <Paged recipesPage={recipesPage} AllRecipes={AllRecipes.length} paged={paged}/>
            <footer>
                <p>© 2022 Rolandor25 - PI Henry Food Single Page Aplication</p>
            </footer>
        </div> 
    )
}

function mapStateToProps(state){
    return{
        AllRecipes: state.AllRecipes
    }
}

function mapDispatchToProps(dispatch){
    return{
      getList: dispatch(getRecipeList())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ListRecipe)