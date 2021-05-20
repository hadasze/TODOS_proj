import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Components/Todo'

function App() {

  const [enteredTodoLabel, setEnteredTodoLabel] = useState('stam');
  const [idCounter, setIdCounter] = useState(0);
//  {id: number, label: label, active: true}
  const [allTodos, setAllTodos] = useState([]);


  const submitCompleteTodo = (currID) => {
    allTodos.forEach(todo => { todo.id === currID ? todo.active = false : todo.active = todo.active;
    });
  }

  const submitInProgressTodo = (currID) => {
    allTodos.forEach(todo => { todo.id === currID ? todo.active = true : todo.active = todo.active;
    });
  }

  const addTodo = () => {
    console.log("dd");
    setIdCounter(idCounter+1);
    setAllTodos ( [...allTodos, {id: idCounter, label:enteredTodoLabel, active: true}])  
  }

  useEffect(() => {

  }, [allTodos]);

  return (
    <div className="App">
      <input type="text" name="todoLabel" id="label" onChange={(e) => setEnteredTodoLabel(e.target.value)} value={enteredTodoLabel}/> 
      <button onClick={addTodo}> ADD TODO</button>
      
      <h2>all todos</h2>
      {allTodos ? allTodos.map((currTodo) => 
              <Todo id={currTodo.id} label={currTodo.label} submitCompleteTodo={submitCompleteTodo} submitInProgressTodo={submitInProgressTodo}></Todo>
      ) : ""}
      
    </div>
  );
}

export default App;


