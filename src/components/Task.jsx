function Task({ index, todo, onToggle, isCompleted }) {
  const taskStyle = {
    backgroundColor: isCompleted ? 'lightgreen' : 'lightblue',
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" style={taskStyle}>
      <div>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todo}</span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-outline-secondary mx-2"
          onClick={() => onToggle(index)}
        >
          {isCompleted ? 'Undo' : 'Complete'}
        </button>
        
      </div>
    </li>
  );
}

export default Task;
