import React from 'react'


function Todo(props) {

    const onCompleteHandler = () => {
        console.log("print in todo");
        props.submitCompleteTodo(props.currTodo.id)
    }

    const onActiveHandler = () => {
        console.log("onActiveHandler print in todo");

        props.submitInProgressTodo(props.currTodo.id);
    }


    return (
      <form>
          {console.log(props.currTodo.active)}
          <input type="checkbox" name="news" id="news" checked={!props.currTodo.active} onChange={!props.currTodo.active ? onActiveHandler : 
                                                                                                                        onCompleteHandler}/> 
          {props.currTodo.label}
      </form>
    );
  }
  
  export default Todo;