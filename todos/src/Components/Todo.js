import React from 'react'


function Todo(props) {

    const onCompleteHandler = () => {
        props.submitCompleteTodo(props.currTodo.id)
    }

    const onActiveHandler = () => {
        props.submitInProgressTodo(props.currTodo.id);
    }


    return (
      <form>
          <input type="checkbox" name="news" id={props.currTodo.id} checked={!props.currTodo.active} onChange={!props.currTodo.active ? onActiveHandler : 
                                                                                                                        onCompleteHandler}/> 
          {props.currTodo.label}
      </form>
    );
  }
  
  export default Todo;