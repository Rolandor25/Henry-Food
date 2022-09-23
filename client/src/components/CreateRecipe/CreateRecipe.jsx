import React from "react";
import { createRecipe } from "../../redux/actions";
import { useDispatch } from 'react-redux'
import '../../layout.css'


// let btn = document.getElementById('addsteep')
// let txt = document.getElementById('inputsteep')
// let ul = document.getElementById('stepslist');

// if (btn) {
//     btn.addEventListener('click', function() {
//     let list = document.createElement('li')
//     list.innerHTML = txt.value;
//     ul.appendChild(list);
//     })   
// }


export default function CreateRecipe(){
    // SETEO ESTADOS INIIALES DE COMPONENTES DEL FORMULARIO
    let[input,setInput]=React.useState({name:'',resume:'',hs:'',steps:'',image:'',diets:''});
    let[checked, setChecked] = React.useState([]);
    const checkList  = ['dairy free' , 'gluten free' , 'ketogenic' , 'lacto ovo vegetarian' , 'lacto vegetarian' , 'low fodmap' , 'ovo vegetarian' , 'paleolithic' , 'pescetarian' , 'primal' , 'vegan' , 'vegetarian' , 'whole 30']; 

    //MANEJADOR DE EVENTOS DE CAMBIO EN CAMPOS IMPUTS
    let handleChange=(event)=>{
        event.preventDefault();
        setInput((prev) => ({...prev,[event.target.name]:event.target.value}))   
    }

    //MANEJADOR DE EVENTOS DE SELECCION DE CHECKBOXES
    let handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList); 
    };

    //MANEJADOR DE SUBMIT DEL FORM

    let dispatch = useDispatch();
    let handlesubmit=(event)=>{
        event.preventDefault();
        input.diets=checked // Almaceno en dietas el arreglo generado por los items chequeados de la lista de dietas
        //=========== VALIDACIONES DEL FORMULARIO =========== 

        //=================================================== 
        dispatch(createRecipe(input))
        console.log(input)
        setInput({name:'',resume:'',hs:'',steps:'',image:''})//Limpio el Form despues de guardar
    }

    //FORMULARIO
    return(

        <div className="container">

            <header className='header'>
            </header>

            <main className="container__main">
                {/*<!-- Left sidebar -->*/}
                <aside className="container__left">...</aside>
        
                {/*<!-- Main content -->*/}
                <article className="container__middle_f">
                    
                    <React.Fragment>
                        <form onSubmit={event=>handlesubmit(event)}>
                            <h1 className='container_tittleform' align="center">Share Your Recipes And Bee Part of Recipedia Community</h1> 
                            <h2 align="center"> CREATE RECIPE</h2> 
                            <br/>

                            <table id="table1" cellSpacing="5px" cellPadding="5%" align="center"> 
                                <tr>
                                    <td align="right"><strong>Recipe Name:</strong></td>
                                    <td><input type={'text'} name={'name'} className='container_input' value={input.name}
                                    onChange={(event)=>handleChange(event)}/></td>
                                </tr>

                                <tr>
                                    <td align="right"><strong>Resume: </strong></td>
                                    <td><textarea id="sumarytext" name="sumarytext" rows="4" cols="52"  value={input.resume}>
                                    onChange={(event)=>handleChange(event)}</textarea></td>
                                </tr>

                                <tr>
                                    <td align="right"><strong>Heatlth Score:</strong> </td>
                                    <td><input type={'number'} name={'hs'}  className='container_inputnum' value={input.hs}
                                    onChange={(event)=>handleChange(event)}/></td>
                                </tr>

                                <tr>
                                    <td align="right"><strong>Step by Step:</strong></td>
                                    <td>
                                        <input id="inputsteep" type={'text'} name={'steps'} className='container_inputstp' value={input.steps}
                                        onChange={(event)=>handleChange(event)}/>
                                        <input type='button' value='Add to List' id='addsteep' />
                                    </td>
                                </tr>

                                {/* <tr>
                                    <ul id='stepslist'>
                                    </ul>
                                </tr> */}

                                <tr>
                                    <td align="right"><strong>Reference Image:</strong></td>
                                    <td><input type={'text'} name={'image'}  className='container_input' value={input.image}
                                    onChange={(event)=>handleChange(event)}/></td>
                                </tr>

                                <tr className="checkList">
                                    <td align="right" className="title"><strong>Diets Types:</strong></td>
                                    <td className="diets-list">
                                    {checkList.map((item, index) => (
                                        <div key={index}>
                                        <input type="checkbox" value={item} onChange={handleCheck} />{item.charAt(0).toUpperCase() + item.slice(1)}
                                        </div>
                                    ))}
                                    </td>
                                </tr>  
                                {/* BOTONES DEL FORMULARIO */}
                                <tr>
                                    <td align="right" className="title"><strong>Form Options:</strong></td>
                                    <td><input type={'submit'}  value={'Create'}/>                                                             
                                    <input type={'reset'}  value={'Reset'}/></td>                          
                                </tr> 
                            </table>
                        </form>
                    </React.Fragment>
        
                </article>
        
                {/*<!-- Right sidebar -->*/}
                <nav className="container__right"></nav>
            </main>
            <footer>
                <p>© 2022 Rolandor25 - PI Henry Food Single Page Aplication</p>
            </footer>
        </div> 

    )

}