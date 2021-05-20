import React from 'react'


function OptionBar(props) {


    return (
      <div>
          <button onClick={() => props.setMode("all")}> ALL </button>
          <button onClick={() => props.setMode("completed")}> COMPLETED </button>
          <button onClick={() => props.setMode("active")}> ACTIVE </button>
          <div>
          ~~ total todos: {props.allTodos} ~~ 
          </div>
          <div>
          ~~ still needs to work on: {props.allActives} ~~          
          </div>
      </div>
    );
  }
  
  export default OptionBar;