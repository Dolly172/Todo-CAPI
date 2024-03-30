import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import {TodoElement} from './TodoElement';

function TodoDashboard(){

  const {todos} = useContext(MyContext)
  console.log(todos)
  
    return(
        <div className='dashboard'>
          {todos.length>0 ? 
          <div className='with-tasks'>
          {todos.map((item, index) => {
            return(
              <TodoElement key={index} item={item} />
            )
          })}
        </div> 
        : 
          <div className='no-task'>
          <div className='line'></div>
          <div className='text'>No tasks</div>
          <div className='line'></div>
          </div>
        }
          
          
        </div>
    )
}

export default TodoDashboard;