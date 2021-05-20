import { useEffect, useState } from 'react';
import './App.css';
import OptionBar from './Components/OptionBar';
import Todo from './Components/Todo'

function App() {

  //Todo template:  {id: number, label: label, active: true}

  const [enteredTodoLabel, setEnteredTodoLabel] = useState('stam');
  const [idCounter, setIdCounter] = useState(0);
  const [allTodos, setAllTodos] = useState([]);
  const [mode, setMode] = useState("all");

  const submitCompleteTodo = (currID) => {
    console.log(currID);
   setAllTodos(allTodos.map(todo => todo.id === currID ? {id: currID, label: todo.label, active: !todo.active} : todo ));
  }

  const submitInProgressTodo = (currID) => {
   setAllTodos(allTodos.map(todo =>  todo.id === currID ? {id: currID, label: todo.label, active: !todo.active} : todo));
  }

  const addTodo = () => {
    setIdCounter(idCounter+1);
    setAllTodos ( [...allTodos, {id: idCounter, label:enteredTodoLabel, active: true}])
  }

  const countActives = () =>{
    let counter = 0;
    allTodos.forEach(todo => 
      todo.active === true ? counter = counter + 1 : counter
    );
    return counter;
  }

  useEffect(() => {

  }, [allTodos]);

  return (
    <div className="App">
      <h3>MY TODO'S LIST:</h3>
      <input type="text" name="todoLabel" id="label" placeholder="give titel for your todo..." onChange={(e) => setEnteredTodoLabel(e.target.value)}/> 
      <button onClick={addTodo}> ADD TODO</button>
          
    {mode ==="all" ?  
      <div>
        <h2>all todos</h2>
          {allTodos ? allTodos.map((currTodo) => 
              <Todo currTodo={currTodo} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo}></Todo>
          ) : ""}
      </div>: ""}

    {mode==="active" ?       
      <div>
        <h2>active todos</h2>
          {allTodos ? allTodos.map((currTodo) => 
                 currTodo.active ? <Todo currTodo={currTodo} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo}></Todo>
                : ""
        ) : ""}
      </div>: ""
    }

    {mode==="completed" ?       
      <div>
        <h2>completed todos</h2>
          {allTodos ? allTodos.map((currTodo) => 
                 !currTodo.active ? <Todo currTodo={currTodo} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo}></Todo>
                : ""
        ) : ""}
        </div>: ""
    }

      <OptionBar setMode={setMode} allTodos={allTodos.length} allActives={countActives()}></OptionBar>
      
    </div>
  );
}

export default App;


