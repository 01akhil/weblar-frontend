import React from "react";

const TaskInput = ({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
}) => (
  <div>
    <input
      type="text"
      placeholder="Task Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-black"
    />
    <textarea
      placeholder="Task Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-black"
    />
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-black"
    >
      <option value="pending">Pending</option>
      <option value="in progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>
);

export default TaskInput;
