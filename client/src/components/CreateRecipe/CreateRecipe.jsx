import React from "react";
import { createRecipe } from "../../redux/actions";
import { useDispatch } from 'react-redux'

export default function CreateRecipe(){
    // SETEO ESTADOS INIIALES DE COMPONENTES DEL FORMULARIO
    let[input,setInput]=React.useState({name:'',resume:'',hs:'',steps:'',image:'',diets:''});
    let[checked, setChecked] = React.useState([]);
    const checkList  = ['gluten free', 'ketogenic', 'vegetarian', 'lacto vegetarian','ovo vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'dairy free']; 

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
        //console.log(input)
        setInput({name:'',resume:'',hs:'',steps:'',image:''})//Limpio el Form despues de guardar
    }

    //FORMULARIO
    return(
        <React.Fragment>
            <div>Create New Recipe</div>
            <br/>
            <form onSubmit={event=>handlesubmit(event)}>
                <div>
                    <label>Recipe Name: </label>
                    <input type={'text'} name={'name'} value={input.name}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                <div>
                    <label>Resume: </label>
                    <input type={'text'} name={'resume'} value={input.resume}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                <div>
                    <label>Step by Step: </label>
                    <input type={'text'} name={'steps'} value={input.steps}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                <div>
                    <label>Heatlth Score: </label>
                    <input type={'number'} name={'hs'} value={input.hs}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                    <div className="checkList">
                        <div className="title">Diets Types:</div>
                        <div className="diets-list">
                        {checkList.map((item, index) => (
                            <div key={index}>
                            <input type="checkbox" value={item} onChange={handleCheck} />{item.charAt(0).toUpperCase() + item.slice(1)}
                            </div>
                        ))}
                        </div>
                    </div>   
                <div>
                    <label>Image: </label>
                    <input type={'file'} name={'image'} value={input.image}
                    onChange={(event)=>handleChange(event)}/>
                </div>  
                <br/>

                {/* BOTONES DEL FORMULARIO */}

                <input type={'submit'}  value={'Create'}/>                                                                    
                <input type={'reset'}  value={'Reset'}/> 
            </form>
        </React.Fragment>
    )
}