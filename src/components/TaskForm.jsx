import React, { useState } from "react";

function TaskForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Add new Todo..."
                aria-label="Add new Todo"
                aria-describedby="button-addon2"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon2"
                onClick={handleAddTodo}
              >
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
