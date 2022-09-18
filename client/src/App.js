import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import IniButon from './components/Buton/Buton';
import Nav from './components/Nav/Nav';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail'



function App() {
  return (
    <React.Fragment>

      <Route exact path={'/'} component={IniButon}/>
      <Route path={'/recipes'} component={Nav}/>  
      <Route exact path={'/recipes'} component={RecipeList}/> 
      <Route exact path={'/recipe/:id'} component={RecipeDetail}/>
      <Route exact path={'/recipes/create'} component={CreateRecipe}/> 
    </React.Fragment>
  );
}

export default App;
