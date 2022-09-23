//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
// REDUCER
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
const initialState={
    RecipeX:[], //Recetas creadas
    Recipes:[],
    AllRecipes: [],
    dietTypes: [],
    detail:{}
}
export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case 'RECIPE_LIST':
            return{
                ...state,
                Recipes: action.payload,
                AllRecipes: action.payload
            }          
        case 'RECIPE_DETAIL':
            return{
                ...state,
                detail: action.payload
            }  
        case 'CREATE_RECIPE':
            return {
                ...state,
            }
          //**********************************************    
        case 'DIET_TYPE_FILTER':
          const All_Recipes = state.AllRecipes;     
          console.log(All_Recipes)  
          const DietFilter = All_Recipes.filter(r => r.diet?.some(d => d.toLowerCase() === action.payload.toLowerCase()))   
          console.log(DietFilter)          
          return {
            ...state,
            Recipes: DietFilter
          };

        case 'SORTBYNAME':   
          let RecipesSort = [...state.AllRecipes]       
          RecipesSort = action.payload === 'atoz' ?
          state.AllRecipes.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
          }) :
          state.AllRecipes.sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
          });          
          return {
            ...state,
            Recipes: RecipesSort
          };

        case 'HS_SORT':
          let RecipesSortByHS = [...state.AllRecipes] 
          RecipesSortByHS = action.payload === 'asc' ?
          state.AllRecipes.sort(function(a, b) {
            if (a.hs > b.hs) return 1;
            if (a.hs < b.hs) return -1;
            return 0;
          }) :
          state.AllRecipes.sort(function(a, b) {
            if (a.hs < b.hs) return 1;
            if (a.hs > b.hs) return -1;
            return 0;
          });
          return {
            ...state,
            Recipes: RecipesSortByHS
          };

        case 'SEARCH_RECIPE':
          return {
            ...state,
            Recipes: action.payload
          };    
          
        case 'GET_DIET':
          return {
            ...state,
            dietTypes: action.payload
        }          
        //**********************************************   
        default:
            return {...state};
    }
}