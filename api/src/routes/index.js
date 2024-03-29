const { Router } = require('express');
const RoutesFunctions = require('../functions/recipies');
const router = Router();
module.exports = router;

//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW
// CONFIGUTACION DE LAS RUTAS
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMW

//<< RUTA#1 >>

// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
//GET /recipes?name="...":
router.get('/recipes', async (req,res,next)=>{
    const { name } = req.query;
    if (name) {
        try {
            //traigo la lista de recets de la api y la db
            let AllRecipes = await RoutesFunctions.listrecipes() 
            // filtro los resultados por el texto de nombre de recete ingresado
            let filterrecipes= AllRecipes.filter(r => r.name.toLowerCase().includes(name.toString().toLowerCase()));
            //valido que existan coincidenciias de la busqueda y defino campos a mostrar
            if (filterrecipes.length) {
                let recipes = filterrecipes.map(e => {
                    return {
                        id: e.id,
                        image: e.image,
                        name: e.name,
                        diet: e.diet ? e.diet : e.diets.map(e => e.name),
                        healthScore: e.healthScore,
                    }
                })
                return res.status(200).send(recipes); // regreso la lista de recetas resultantes
            } else{
                return res.status(400).send('Sorry, we have no recipes that match your search') 
            }
        } catch (error) {
            return res.status(400).send('Sorry, no recipes were found to display') 
        }        
    } else {//muestra todoas las recetas
        try {
        return res.status(200).json( await RoutesFunctions.listrecipes())  
        } catch (error) {
            //return res.status(400).send('Sorry, no recipes were found to display') 
            return res.status(400).send(error.message)
        }
    }   
});

//<< RUTA#2 >>

// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
//GET /recipes/{idReceta}:
router.get('/recipes/:id', async (req,res,next)=>{
    const { id } = req.params;
    try {
        if (id) {
            return res.status(200).json(await RoutesFunctions.recipebyid(id))
        } else {
            res.status(400).send('Sorry, the recipe you were looking for was not found') 
        }        
    } catch (error) {
        res.status(400).send('Sorry, the recipe you were looking for was not found') 
    }
})

//<< RUTA#3 >>

// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos relacionada con sus tipos de dietas.
//POST /recipes:
router.post('/recipes/', async (req,res,next)=>{
    try {
        const { name,resume,hs,steps,image,diets }=req.body
        res.status(200).json(await RoutesFunctions.createrecipe(name,resume,hs,steps,image,diets));
    } catch (error) {
        res.status(400).send('There was an error, check the data and try again') 
    }
})

//<< RUTA#4 >>

// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
// module.exports = router;
//GET /diets:
router.get('/diets', async (req,res,next)=>{
    try {
        res.status(200).json(await RoutesFunctions.listdiets())
    } catch (error) {
        next(error)
    }
})

//<< RUTA#5 >>

//borrar recetas creadas en la base de datos
router.delete('/recipes/delete/:id', async (req,res,next)=>{
    const { id } = req.params;
    try {
        if (id) {
            const response=await RoutesFunctions.delrecipebyid(id);
            if (response!==0) {
            }else{
                res.status(400).send('Sorry, the recipe you want to delete was not found.') 
            }  
        } else {
            res.status(400).send('Sorry, the recipe you want to delete was not found.') 
        }        
    } catch (error) {
        res.status(400).send('Sorry, the recipe you want to delete was not found.') 
    }
})

//<< RUTA#6 >>

//modifica recetas creadas en la base de datos
router.put('/recipes/update/', async (req,res,next)=>{
    try {
        const response=await RoutesFunctions.modrecipebyid(req.body);
        if (response!==0) {
        }else{
            console.log(error)
            res.status(400).send(error)
            // res.status(400).send('Sorry, the recipe you want to update was not found.') 
        }        
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
        // res.status(400).send('Sorry, there was an error and the selected recipe could not be updated.') 
    }
})

module.exports = router;