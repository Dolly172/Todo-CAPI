import React, { useState } from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoDashboard from './TodoDashboard';
import { MyContext } from '../MyContext';

function HomePage(){

    const data = [
        // {id: 1, title: "Study Physics", details: "Complete chapter 1"},
        // {id: 2, title: "Revise", details: "Revision of Chem Chapter 2 to 5"},
        // {id: 3, title: "Play", details: "Play time with mili"},
    ]

    const [nextId, setNextId] = useState(1)

    const [todos, setTodos] = useState(data)
    const [newTodo, setNewTodo] = useState({
        id: nextId,
        title: "",
        details: ""
    });
    const [edit, setEdit] = useState(false);
  
    return(
        <MyContext.Provider value={{todos, setTodos, newTodo, setNewTodo, edit, setEdit, nextId, setNextId}}>
         <Header />
         <AddTodo />
         <TodoDashboard />
         </MyContext.Provider>
    )
}

export default HomePage;