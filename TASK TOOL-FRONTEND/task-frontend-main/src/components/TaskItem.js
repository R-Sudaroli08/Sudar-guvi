import React from "react";

const TaskItem = ({ task, removeTask, toggleTask }) => (
  <div>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTask(task._id)}
    />
    <span>{task.title}</span>
    <button onClick={() => removeTask(task._id)}>Delete</button>
  </div>
);

export default TaskItem;
