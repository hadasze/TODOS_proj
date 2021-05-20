import React, {useState} from 'react'


function Todo(props) {

    const [complete, setComplete] = useState(false);

    const onCompleteHandler = () => {
        // setComplete(true);
        props.submitCompleteTodo()
    }

    const onActiveHandler = () => {
        // setCheck(!check);
        props.submitInProgressTodo();
    }


    return (
      <form>
          {/* <input type="checkbox"> {complete ? "inProgress" : "complete"}</input> */}
          <input type="checkbox" name="news" id="news" checked={props.active} onChange={props.active ? () => onActiveHandler(props.id) : 
                                                                                                        () => onCompleteHandler(props.id)}/> 
          {props.label}
      </form>
    );
  }
  
  export default Todo;