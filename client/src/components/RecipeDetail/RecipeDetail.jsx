import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import { getRecipeDetail} from '../../redux/actions/index'
import { deleteRecipe } from '../../redux/actions/index'
import '../../layout.css'


//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWWMWWMWMWMW
// DETALLE DE RECETA
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWWMWWMWMWMW

export default function RecipeDetail(props){
  let dispatch=useDispatch()
  let id_detail= props.match.params.id
  let imgtoshow=""
  let dietstring=""
  let Step_Id=0
  const history=useHistory()

  //SE CAPTURA LA INFORMACION DE LA RECETA
  useEffect(() => {
    dispatch(getRecipeDetail(id_detail))
  }, [dispatch, id_detail]);

  //ASIGNO A FULLECIPE EL DETALLE PASSSADO POR EL BACK
  const FullRecipe = useSelector(state => state.detail);

  //SE ELIMINA LA RECETA
  function handleDelete(event){
    event.preventDefault()
    dispatch(deleteRecipe(id_detail))
    alert('The recipe was deleted successfully!') 
    history.push('/recipes'); 
  }
  //SE MODIFICA LA RECETA
  function handleMod(event){
    alert('Now you can modify the recipe!') 
    history.push(`/recipe/create/`,FullRecipe); 
  }

  //VALIDO SI LA RECETA TIENE INFO DE IMAGEN DE REFERENCIA Y EN SU DEFECTO
  //SE MUESTRA UNA IMAGEN POR DEFECTO
  if (!FullRecipe.image) {
    imgtoshow="https://t3.ftcdn.net/jpg/04/41/73/28/240_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg"
  }else{
    imgtoshow=FullRecipe.image
  }

  //VALIDO SI LA RECETA TIENE INFO DE DIETAS Y SE CONCATENA LA INFO DEL ARREGLO
  //EN UN STRING PARA MOSTRARLO COMO DETALLE DE LAS RECETAS
  if (FullRecipe.diet) {
    let tempdiet=FullRecipe.diet
    dietstring=tempdiet.join(', ')
  }else{
    dietstring=FullRecipe.diet
  }
//******************** RENDERIZADO DEL DETALLE ********************/
  return(
    <div className="conteiner">
      {/* //HEADER >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <header className='header'>
      </header>      
      {/* //BODY >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */} 
      <main className="conteiner__main">
        {/*<!-- Left sidebar -->*/}
        <aside className="conteiner__left"></aside>
        {/*<!-- Main content -->*/}
        <article></article>
          <div className="conteiner__middle_h">
              {
                FullRecipe ? (
                  <div className="content_card_d">
                    <h1>{FullRecipe.name}</h1>
                    {/* // CONTENIDO DE COL IZQUIERDA  */}
                    <div className='conteiner__colLft'>
                      <img src={imgtoshow} alt=""/>
                      <div><strong>Health Score: </strong>{FullRecipe.hs} </div>
                      <strong> Suggested for these diets:</strong>
                      <div> {dietstring}</div>
                      <br/>
                      <div>
                        {
                          isNaN(FullRecipe.id) && ( 
                            <div><button id='DelButton' className='refreshDelButton' onClick={handleMod}>Modificar Receta</button>
                            <button id='DelButton' className='refreshDelButton' onClick={handleDelete}>Eliminar Receta</button></div>
                          )
                        }
                      </div>
                    </div>
                    {/* // CONTENIDO DE COL DERECHA  */}
                    <div className='conteiner__colRgt'>
                      <p dangerouslySetInnerHTML={{__html: FullRecipe.resume,}} className="detjust"></p>
                      <br/>
                      <div><strong>Steps to Preper:</strong></div>
                      <ol>
                        {
                          FullRecipe.steps?.map(e => {
                            return (
                              <li className="Steps" key={Step_Id++}>{e}</li>
                            )
                          })
                        }    
                      </ol>
                    </div>
                  </div>):null
              }
          </div> 
        { /*<!-- Right sidebar -->*/}
        <aside className="conteiner__right"></aside>
      </main>
      {/* //FOOTER>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <footer>
        <p>© 2022 Rolandor25 - PI Henry Food Single Page Aplication</p>
      </footer>
  </div> 
  )
}
