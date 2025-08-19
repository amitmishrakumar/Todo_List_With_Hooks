


import { useState } from "react";

export default function Todo_List_with_Hooks() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <input 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className="border p-2 mr-2" 
        placeholder="Enter task"
      />
      <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>

      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span 
              onClick={() => toggleComplete(index)} 
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTask(index)} className="text-red-600">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
