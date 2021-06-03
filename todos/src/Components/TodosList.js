import React from 'react'
import {Todo} from '../Components/Todo'


export function TodosList(props) {

    const pred = (todo) => {
       return props.mode === "active" ? todo.active :
        props.mode === "completed" ? !todo.active : true;
    }

    return (
        <div>
          <h2>{props.title}</h2>
            {props.todos ? props.todos.map((todo) => 
                pred(todo) ?  
                <ul key={todo.id}>
                    <Todo todo={todo} submitCompleteTodo={props.submitCompleteTodo} submitInProgressTodo={props.submitInProgressTodo}></Todo>
                </ul> : ""  
            ) : ""}
        </div>
    );
  }
  
  export default TodosList;