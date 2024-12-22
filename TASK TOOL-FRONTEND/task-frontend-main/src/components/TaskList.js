import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, removeTask, toggleTask }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task._id}
        task={task}
        removeTask={removeTask}
        toggleTask={toggleTask}
      />
    ))}
  </div>
);

export default TaskList;
