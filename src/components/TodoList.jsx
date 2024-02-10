import React, { useState } from 'react';
import Task from './Task';
import EditTaskForm from './EditTaskForm';

function TodoList({ todos: propTodos }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [todos, setTodos] = useState([]);

  const handleToggle = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    if (updatedCompletedTasks.includes(index)) {
      updatedCompletedTasks.splice(updatedCompletedTasks.indexOf(index), 1);
    } else {
      updatedCompletedTasks.push(index);
    }
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...propTodos];
    updatedTodos.splice(index, 1);
    setCompletedTasks(completedTasks.filter((taskIndex) => taskIndex !== index));
    setTodos(updatedTodos);
  };

  const handleEdit = (index, editedTodo) => {
    const updatedTodos = [...propTodos];
    updatedTodos[index] = editedTodo;
    setTodos(updatedTodos);
  };

  return (
    <ul className="list-group">
      {propTodos.map((todo, index) => (
        <div key={index}>
          <Task
            index={index}
            todo={todo}
            isCompleted={completedTasks.includes(index)}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
          <EditTaskForm
            index={index}
            todo={todo}
            onEdit={handleEdit}
          />
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
