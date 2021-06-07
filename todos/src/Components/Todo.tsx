import React from 'react'
import {todo} from '../Types/todo'

interface TodoProps {
  todo: todo
  submitCompleteTodo: (id: string) => void
  submitInProgressTodo: (id: string) => void
}

 const Todo : React.FC <TodoProps> = (props) => {
    const onCompleteHandler = () => {
        props.submitCompleteTodo(props.todo.id)
    }

    const onActiveHandler = () => {
        props.submitInProgressTodo(props.todo.id);
    }


    return (
      <form>
          <input type="checkbox" name="news" id={props.todo.id} checked={!props.todo.active} onChange={!props.todo.active ? onActiveHandler : 
                                                                                                                        onCompleteHandler}/> 
          {props.todo.label}
      </form>
    );
  }

  export default Todo;
  