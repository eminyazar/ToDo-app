import React, { useState } from "react";

function EditTaskForm({ index, todo, onEdit }) {
  const [editedTodo, setEditedTodo] = useState(todo);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    onEdit(index, editedTodo);
    setIsEditing(false);
  };

  return (
    <div className="mb-3">
      {!isEditing ? (
        <button
          className="btn btn-sm btn-outline-primary mt-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      ) : (
        <>
          <input
            type="text"
            className="form-control"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button
            className="btn btn-sm btn-outline-primary mt-2"
            onClick={handleEdit}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default EditTaskForm;
