import React, { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTask = async (id) => {
    const task = tasks.find((task) => task._id === id);
    const updatedTask = { ...task, completed: !task.completed };
    const { data } = await updateTask(id, updatedTask);
    setTasks(tasks.map((t) => (t._id === id ? data : t)));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
