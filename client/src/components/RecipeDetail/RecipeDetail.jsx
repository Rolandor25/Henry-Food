import React from "react";
import { useEffect } from 'react';
import { useSelector ,useDispatch } from "react-redux";
import { getRecipeDetail } from '../../redux/actions/index'
import '../../layout.css'

export default function RecipeDetail(props){
  let dispatch=useDispatch()
  let id_detail= props.match.params.id
  let imgtoshow=""
  let dietstring=""
  let Step_Id=0
  useEffect(() => {
    dispatch(getRecipeDetail(id_detail))
}, [dispatch, id_detail]);

const FullRecipe = useSelector(state => state.detail);
  if (!FullRecipe.image) {
    imgtoshow="https://t3.ftcdn.net/jpg/04/41/73/28/240_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg"
  }else{
    imgtoshow=FullRecipe.image
  }
  if (FullRecipe.diet) {
    let tempdiet=FullRecipe.diet
    dietstring=tempdiet.join(', ')
  }else{
    dietstring=FullRecipe.diet
  }

  return(
    <div className="conteiner">

      <header className='header'>
      </header>      
      
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

                    <div className='conteiner__colLft'>
                      <img src={imgtoshow} alt=""/>
                      <div><strong>Health Score: </strong>{FullRecipe.hs} </div>
                      <h4> Suggested for these diets:</h4>
                       <div> {dietstring}</div>
                    </div>
                    
                    <div className='conteiner__colRgt'>
                      <div className="detjust">{FullRecipe.resume?.replace(/<[^>]*>/g, '')}</div>
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
      <footer>
        <p>© 2022 Rolandor25 - PI Henry Food Single Page Aplication</p>
      </footer>
  </div> 
  )
}
