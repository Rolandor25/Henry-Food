//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
// ACCIONES DE REDUX
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW

export function getRecipeList(){
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipes`)
        .then(response=>response.json())
        .then(post=>dispatch({type: 'RECIPE_LIST', payload: post}))
    }
}

export function getRecipeDetail(id) {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipes/${id}`)
        .then(response=>response.json())
        .then(post=>dispatch({type: 'RECIPE_DETAIL', payload: post}))
    }
}

export function createRecipe(data){
    return{type:'CREATE_RECIPE', payload: data}
}