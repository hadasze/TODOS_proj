import React from 'react'
import Todo from './Todo'

const TodosList : React.FC <{title: string, mode: string, todos: {id: string, active: boolean, label: string}[], submitCompleteTodo: (id: string) => void, submitInProgressTodo: (id: string) => void}> = (props) => {

    const pred = (todo : {id: string, active: boolean, label: string}) => {
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