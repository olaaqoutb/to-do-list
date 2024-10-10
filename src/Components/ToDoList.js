import React, { useState } from 'react';
import '../index.css'; // Ensure this is the correct path to your CSS file

function ToDoList() {
  const [tasks, setTasks] = useState(["study react", "going to the gym", "read a book"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1> To-Do-List</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type='text'
          placeholder='Enter A Text'
          value={newTask} // Fixed from 'values' to 'value'
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <div style={{ display: 'flex', gap: '5px' }}>
              <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
              <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>UP</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
