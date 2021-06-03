import React from 'react'


export function Todo(props) {

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
  