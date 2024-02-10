import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <TaskForm onAddTodo={handleAddTodo} />
        {showForm && <TaskForm onAddTodo={handleAddTodo} />}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
