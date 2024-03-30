import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../MyContext';

export  const TodoElement = ({item}) => {
    
    const {todos, setTodos, setNewTodo, setEdit} = useContext(MyContext)
    // console.log(todos)

    function deleteHandler(id){
       let values = todos.filter((el) => el.id !== id);
       setTodos(values);
    }

    function editHandler(id){
       setEdit(true);
       let value = todos.filter((el) => el.id === id);
       let obj = value[0];
       let tempObj = {id: obj.id, title: obj.title, details: obj.details};
       setNewTodo(tempObj); 
    }
    
    return(
        <div className='todo-ele'>
            <div className='ele-title'>
                <span>{item.title}</span>
                <span className='btns'>
                    <span onClick={() => editHandler(item.id)} className='edit'>Edit</span>
                    <span onClick={() => deleteHandler(item.id)} className='del'>Del</span>
                </span>
            </div>
            <hr className="horizontal-line"></hr>
            <div>{item.details}</div>
        </div>
    )
}

