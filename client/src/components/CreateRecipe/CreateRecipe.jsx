import React from "react";
import { useState } from 'react'
import { createRecipe } from "../../redux/actions";
import { useDispatch } from 'react-redux'
import '../../layout.css'

function FormErr(input) {
    let errors = {};
    if (!input.name) errors.name = 'Please enter a recipe name';
    if (!input.resume) errors.resume = 'Please enter recipe description';
    if (input.hs < 1 || input.hs > 100) errors.hs = 'The health score range is between 1 and 1000';
    if (!input.steps.length) errors.steps = 'Please add at least one preparation step to the recipe';
    if (!input.diets.length) errors.diets = 'Please select at least one diet';
    if (!input.image) errors.image = 'Please indicate the url of the image';
    return errors;
};

export default function CreateRecipe(){
    // SETEO ESTADOS INIIALES DE COMPONENTES DEL FORMULARIO
    let[input,setInput]=useState({name:'',resume:'',hs:'',steps:[],image:'',diets:[]});
    let[checked, setChecked] = useState([]);
    const [errors, setErrors] = useState({})
    let listed=[];
    const checkList  = ['dairy free' , 'gluten free' , 'ketogenic' , 'lacto ovo vegetarian' , 'lacto vegetarian' , 'low fodmap' , 'ovo vegetarian' , 'paleolithic' , 'pescetarian' , 'primal' , 'vegan' , 'vegetarian' , 'whole 30']; 
    const dispatch = useDispatch();

    //MANEJADOR DE EVENTOS DE CAMBIO EN CAMPOS IMPUTS
    let handleChange=(event)=>{
        event.preventDefault();
        setInput((prev) => {   
            const RecipeCreated = {...prev,[event.target.name]: event.target.value}
            const validations = FormErr(RecipeCreated);
            setErrors(validations)
            return RecipeCreated
        });
    }

    //MANEJADOR DE EVENTOS DE CAMBIO EN LISTA DE PASOS
    let handleSteps = (event) => {
        listed =(event.target.value.match(/\n/g)||[]).length;
        if (event.target.value!=='' && listed>0){
            setInput({
                ...input,
                steps: event.target.value.split('\n')
            });   
            console.log(input.steps.length)            
        }else{
            setInput({
                ...input,
                steps: [event.target.value]
            });  
        }
        const validations = FormErr(input);
        setErrors(validations)   
    };

    //MANEJADOR DE EVENTOS DE SELECCION DE CHECKBOXES
    let handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        } 
        setInput({
            ...input,
            diets: updatedList
        });
        setChecked(updatedList);
        const validations = FormErr(input);
        setErrors(validations)
    };

    //MANEJADOR DE SUBMIT DEL FORM
    function handlesubmit(event){
        event.preventDefault()
        if (input.name === '' && 
           input.resume === '' && 
           input.hs === '' &&
           input.steps === '' &&
           input.diets.length<1) {
           alert("you must complete the required fields to be able to save the recipe");}
       else {
            dispatch(createRecipe(input))
            //alert('New recipe added successfully!')
            setInput({name:'',resume:'',hs:'',steps:'',image:'',diets:[]})//Limpio el Form despues de guardar      
        }
    }

    function handlereset(event){
        setInput({name:'',resume:'',hs:'',steps:'',image:'',diets:[]})//Limpio el Form despues de guardar
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
                                    <td><input type={'text'} name={'name'} className='container_input' value={input.name} onChange={(event)=>handleChange(event)}/>
                                    <div></div>
                                    {errors.name && (
                                        <span className="errors">{errors.name}</span>
                                    )}                                    
                                    </td>
                                </tr>

                                <tr>
                                    <td align="right"><strong>Resume: </strong></td>
                                    <td><input type={'text'} name={'resume'} className='container_input' value={input.resume} onChange={(event)=>handleChange(event)}></input>
                                    <div></div>
                                    {errors.resume && (
                                        <span className="errors">{errors.resume}</span>
                                    )}                                     
                                     </td>                                     
                                </tr>

                                <tr>
                                    <td align="right"><strong>Heatlth Score:</strong> </td>
                                    <td><input type={'number'} name={'hs'}  className='container_inputnum' value={input.hs} onChange={(event)=>handleChange(event)}/>
                                    <div></div>
                                    {errors.hs && (
                                        <span className="errors">{errors.hs}</span>
                                    )}                                    
                                    </td>                                     
                                </tr>

                                <tr>
                                    <td align="right"><strong>Step by Step:</strong></td>
                                    <td>
                                    <textarea id="inputsteep" type={'text'} rows="8" cols="52" name={'steps'} className='container_inputstp' onChange={(event)=>handleSteps(event)}/>
                                    <div></div>
                                    {errors.steps && (
                                        <span className="errors">{errors.steps}</span>
                                    )}                                     
                                    </td>
                                </tr>

                                <tr>
                                    <td align="right"><strong>Reference Image:</strong></td>
                                    <td><input type={'text'} name={'image'}  className='container_input' value={input.image} onChange={(event)=>handleChange(event)}/></td>
                                </tr>

                                <tr className="checkList">
                                    <td align="right" className="title"><strong>Diets Types:</strong></td>
                                    <td className="diets-list">
                                    {checkList.map((item, index) => (
                                        <div key={index}>
                                        <input type="checkbox" value={item} onChange={handleCheck} />{item.charAt(0).toUpperCase() + item.slice(1)}
                                        </div>
                                    ))}
                                    <div></div>
                                    {errors.diets && (
                                        <span className="errors">{errors.diets}</span>
                                    )}                                     
                                    </td>
                                </tr>  
                                {/* BOTONES DEL FORMULARIO */}
                                <tr>
                                    <td align="right" className="title"><strong>Form Options:</strong></td>
                                    <td><input type={'submit'}  value={'Create'}/>                                                             
                                    <input type={'reset'}  value={'Reset'} onChange={handlereset}/></td>                          
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