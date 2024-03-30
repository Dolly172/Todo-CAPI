import React, {useState} from 'react';
import '../App.css';
import AddLogo from '../images/button-add.png';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
 
function AddTodo(){

    const [isExpanded, setIsExpanded] = useState(false);

    const {nextId, setNextId, todos, setTodos, newTodo, setNewTodo, edit, setEdit} = useContext(MyContext);

    function inputHandler(e){
      const {name, value} = e.target;

      setNewTodo({...newTodo, [name]: value});
    }
    console.log("New Todo:: ", newTodo);

    function submitHandler(){
        if(edit){
            let index = todos.findIndex((el) => el.id === newTodo.id);
            let tempData = todos;
            tempData[index] = Object.assign(tempData[index], newTodo);
            setTodos(tempData);
            setEdit(false);
            let newNxtId = nextId+1;
            setNextId(newNxtId);
            setNewTodo({
                id: newNxtId,
                title: "",
                details: ""
            });
        } else {
            if(newTodo.title !== '' && newTodo.details !== ''){
                setTodos([...todos, newTodo]);
                let newNxtId = nextId+1;
                setNextId(newNxtId);
                setNewTodo({
                    id: newNxtId,
                    title: "",
                    details: ""
                })
            } else {
                alert("Title and input both are required to submit..");
            }
        }
    }

    console.log("NxtId:: ", nextId);

    function expandInput(){
        setIsExpanded(true)
    }
    function shrinkInput(){
        setIsExpanded(false)
    }
  
    return(
        <div className='add'>
            <span className='inputs'>
                <input className='input-field' name='title' value={newTodo.title} onChange={(e) => inputHandler(e)} type='text' placeholder='Title...'></input>
                <textarea className={isExpanded ? 'expandInput' : 'input-field p-5'} name='details' value={newTodo.details} onFocus={expandInput} onBlur={shrinkInput} onChange={(e) => inputHandler(e)} type='text' placeholder='Details...'></textarea>
            </span>
            <span onClick={submitHandler} className='add-btn'>
                <img width={75} height={75} src={AddLogo} alt='add todo' />
            </span>
           
        </div>
    )
}

export default AddTodo;