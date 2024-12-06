import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const TaskList = ({ tasks, handleEditTask, handleDeleteTask }) => {
  return (
    <div className="task-list-container overflow-y-auto shadow-md rounded-lg text-black h-[50vh]">
      <div className="max-h-[50vh]">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks are here</p>
        ) : (
          <ul className="flex flex-col gap-1 shadow-md p-1">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="border border-gray-300 rounded-lg shadow-md flex justify-between items-center p-3 h-[15vh]"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p className="text-sm">{task.description}</p>
                  <p>Status: {task.status}</p>
                  <p>Weather: {task.weather}</p>
                </div>
                <div className="flex space-x-3 items-center">
                  <button
                    onClick={() => handleEditTask(task)}
                    className="p-2 bg-blue-500 text-white rounded-full"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="p-2 bg-red-500 text-white rounded-full"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
