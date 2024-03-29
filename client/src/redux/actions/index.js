//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
// ACCIONES DE REDUX
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
import axios from 'axios';

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

export function createRecipe(payload,mod){
    return async function(dispatch) {
        var response
        try {
            if (mod===false) {
                response = await axios.post('http://localhost:3001/recipes/', payload);
            } else { 
                response = await axios.put('http://localhost:3001/recipes/update/', payload);   
            }
            return response;
        } catch (error) {
            console.log(error)
        }
    }        
}

export function deleteRecipe(id) {
    return async function (dispatch) {
        try {
            return await axios.delete(`http://localhost:3001/recipes/delete/${id}`);
        } catch (error) {
            console.log(error)
        }
    }
}

//***************************************************************************

export function dietTypeFilter(payload) {
    return {
        type: 'DIET_TYPE_FILTER',
        payload
    }
};

export function aplhabeticalSort(payload) {
    return {
        type: 'SORTBYNAME',
        payload
    }
};

export function scoreSort(payload) {
    return {
        type: 'HS_SORT',
        payload
    }
}

export function getRecipesByName(payload) {
    return async function(dispatch) {
        try {
            var response = await axios.get(`http://localhost:3001/recipes/?name=${payload}`);
            return dispatch({type: 'SEARCH_RECIPE', payload: response.data})
        } catch {
            return alert ('Recipe Not Found')
        }
    }
}

export function getdietTypes() {
    return async function(dispatch) {
        try{
            var response = await axios.get(`http://localhost:3001/api/types`);
            return dispatch({type: 'GET_DIET', payload: response.data.map(d => d.name)});
        } catch (error) {
            console.log(error)
        }
    }
}