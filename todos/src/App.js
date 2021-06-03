import { useState, useRef } from 'react';
import './App.css';
import {OptionBar} from './Components/OptionBar';
import {TodosList} from './Components/TodosList';

export function App() {

  function useTodos(){

    const submitCompleteTodo = (currID) => {
      setAllTodos(allTodos.map(todo => todo.id === currID ? {id: currID, label: todo.label, active: !todo.active} : todo ));
     }

     const submitInProgressTodo = (currID) => {
      setAllTodos(allTodos.map(todo =>  todo.id === currID ? {id: currID, label: todo.label, active: !todo.active} : todo));
     }
   
     const addTodo = () => {
       setAllTodos ( [...allTodos, {id: allTodos.length, label:enteredTodoLabel.current.value, active: true}])
       enteredTodoLabel.current.value = '';
     }

     const countActives = () =>{
      let counter = 0;
      allTodos.forEach(todo => 
        todo.active === true ? counter = counter + 1 : counter
      );
      return counter;
    }

    return { submitCompleteTodo, submitInProgressTodo, addTodo, countActives };

  }

  //Todo template:  {id: number, label: label, active: true}
  const enteredTodoLabel = useRef();
  const [allTodos, setAllTodos] = useState([]);
  const [mode, setMode] = useState("all");

  const { submitCompleteTodo, submitInProgressTodo, addTodo, countActives } = useTodos();

  return (
    <div className="App">
      <h3>MY TODO'S LIST:</h3>
      <input ref={enteredTodoLabel} type="text" name="todoLabel" id="label" placeholder="give titel for your todo..." required /> 
      <button onClick={addTodo}>ADD TODO</button>


    {mode ==="all" ?  
      <TodosList title={"all todos"} mode={mode} todos={allTodos} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo} /> : 
    
    mode==="active" ?  
      <TodosList title={"active todos"} mode={mode} todos={allTodos} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo} /> : 
   
    mode==="completed" ?       
      <TodosList title={"completed todos"} mode={mode} todos={allTodos} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo} /> : ""}

    <OptionBar setMode={setMode} allTodos={allTodos.length} allActives={countActives()}></OptionBar>
      
    </div>
  );
}



