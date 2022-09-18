//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
// REDUCER
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
let index=1
const initialState={
    recipex:[], //Recetas creadas
    allrecipes: [],
    diettypes: [],
    detail:{}
}
export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case 'RECIPE_LIST':
            return{
                ...state,
                allrecipes:action.payload
            }          
        case 'RECIPE_DETAIL':
            return{
                ...state,
                detail: action.payload
            }  
        case 'CREATE_RECIPE':
            return {
                ...state,
                recipex: [...state.recipex,{...action.payload,id:index++}]
            }

        default:
            return {...state};
    }
}