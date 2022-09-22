const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { API_KEY } = process.env;
const dietlist = require('../functions/types')

module.exports = {
  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
  // GENERO LISTA DDE RECETAS
  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW

  listrecipes: async function () {
    //DATA DE API
  
    // const apiUrl =  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`);
    // const apiinfo = apiUrl.data.results.map(e => { 
    //   return {
    //     id: e.id,
    //     name: e.title,
    //     hs: e.healthScore,
    //     diet: e.diets,
    //     image: e.image,
    //   }
    // })

    const apiinfo =[]

    //DATA DDE DB
    const dbinfo= await Recipe.findAll({
      //INCLUYO LA LISTA DE DIETAS ASOCIADAS A LA RECETA
      attributes:['id','name','hs','image'],
      include: {
        model: Diet,
        attributes: ['name'],
        through: {
          attributes:[],
        }
      }
    })
    
    //CONSTRUYO ARREGLO MODIFICADO CORRIGIENDA ARREGLO DE DIETAS
    var dbinfox=[]
    for (let kk = 0; kk < dbinfo.length; kk++) {
      let lista=[]
      for (let h = 0; h < dbinfo[kk].diets.length; h++) {
        lista.push(dbinfo[kk].dataValues.diets[h].dataValues.name);
      }
      dbinfox.push({id:dbinfo[kk].id,name:dbinfo[kk].name,hs:dbinfo[kk].hs,image:dbinfo[kk].image,diet:lista})
    }
    
    //CONCATENO AMBOS ARREGLOS PARA OBTENER UNA LISTA CON TODAS LAS RECETAS
    var AllRecipes
    if (dbinfox) {
      AllRecipes = apiinfo.concat(dbinfox)
    } else {
      AllRecipes = apiinfo
    }
    return AllRecipes
  },   

  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
  // BUSCO RECCETA POR ID
  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW

  recipebyid: async function (id_recipe) {
    //VALIDO SI EL TIPO DE ID RECIBIDO ES DE UNA RECETA GUARDADA EN LA DB O VIENE DE LA API
    if (id_recipe.includes('-')) {
      // SI EL ID ES ALFANUMERICO (DE LA DB)
      const findrecipe= await Recipe.findByPk(id_recipe,{
        include: {
          model: Diet,
          attributes: ['name'],
          through: {
            attributes: [],
          }
      }
      })

      //CONSTRUYO ARREGLO MODIFICADO CORRIGIENDA ARREGLO DE DIETAS
      var findRecipeX
      let lista=[]
      for (let h = 0; h < findrecipe.diets.length; h++) {
        lista.push(findrecipe.dataValues.diets[h].dataValues.name);
      }
      findRecipeX=({id:findrecipe.id,name:findrecipe.name,hs:findrecipe.hs,image:findrecipe.image,diet:lista,steps:findrecipe.steps,resume:findrecipe.resume})

      return findRecipeX

      // SI EL ID ES DE LA API  
    }else{
      const apiUrl =  await axios.get(`https://api.spoonacular.com/recipes/${id_recipe}/information?apiKey=${API_KEY}`);
      const findrecipe =  {
        id: apiUrl.data.id,
        image: apiUrl.data.image,
        name: apiUrl.data.title,
        diet: apiUrl.data.diets,
        resume: apiUrl.data.summary,
        healthScore: apiUrl.data.healthScore,
        steps: apiUrl.data.analyzedInstructions[0]?.steps.map(e => {
          return (
            e.step
          )         
          // return {
          //   number: e.number,
          //   step: e.step
          // }
        })
      }    
      return findrecipe
    }
  },  

  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
  // SE CREA UNA NUEVA RECCETA
  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW

  createrecipe: async function (name,resume,hs,steps,image,diets) {
    //CREO LA RECETA EN LA DB
    const newrecipe= await Recipe.create({
      name:name,
      resume:resume,
      hs:hs, 
      steps:steps,
      image:image
    });
    //VINCULO LA RECETA A LA LISTA DE TIPOS DE DIETA A LA QUE ESTA ASOCIADA  
    for (let k = 0; k < diets.length; k++) {
      var dietofrecipe = await Diet.findOne({
        where: {
          name: diets[k]
        }
      })
      newrecipe.addDiet(dietofrecipe.dataValues.id)
    }
    return (newrecipe)
  }, 

  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
  // SE GENERA LISTA DE TIPOS DE DIETA PARA FILTROS Y CREACION DE DIETAS
  //MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW

  listdiets: async function () {
   //VALIDO QUE EXISTAN DIETAS CARGADAS EN LA DB
   let dbdiet= await Diet.findAll()
   // SI HAY DIETAS CARGADAS, SE DEVUELVE LA LISTA
   if (dbdiet.length) {
      return dbdiet
   } else {
   // SINO, SE EXTRAE DE LAS RECETAS DE LA API LOS TIIPOS DE DIETAS EXISTETES Y SE DEVUELVE LA LISTA

      const apiUrl =  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`);
      const recipeslist = apiUrl.data.results.map(e => { 
        return { diet: e.diets}
      })// Guardo todas las recetas de la api y db
      var alldiets=[]
      for (let i = 0; i < recipeslist.length; i++) {// Recorro el array extrayendo en un nuevo array los tipos de dieta en minusculas
        for (let d = 0; d < recipeslist[i].diet.length; d++) {
          alldiets.push(recipeslist[i].diet[d]);
        }
      }
      alldiets= Array.from(new Set(alldiets));// Aplico "SET" para transformar el array a sus valores unicos
      for (let j = 0; j < alldiets.length; j++) {// Recorro el array de valores unicos y cargo en la db
        const newdiet= await Diet.create({
          name:alldiets[j]
        })
      }
      return alldiets
   }
  },   
  
}