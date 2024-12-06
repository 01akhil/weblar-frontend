import React from "react";
import { Plus } from "lucide-react";
import useTasks from "../hooks/useTasks";
import useTypingEffect from "../hooks/useTypingEffect";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import WeatherInput from "./WeatherInput";

const TaskForm = () => {
  const fullTitle = "TTask Manager";
  const displayedTitle = useTypingEffect(fullTitle);

  const {
    tasks,
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    weather,
    city,
    setCity,
    editingTask,
    showCreateForm,
    setShowCreateForm,
    handleCreateTask,
    handleEditTask,
    handleUpdateTask,
    handleDeleteTask,
    fetchWeatherForCity,
    resetForm,
  } = useTasks();

  return (
    <div>
      <div className="w-full sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-[80vh] mx-auto p-6 border-2 border-gray-500 bg-[#fffffd] rounded-lg shadow-md">
        <div className="w-full h-[6vh]">
          <h1 className="text-xl font-bold text-center text-black">
            {displayedTitle}
          </h1>
        </div>

        <h2 className="text-lg font-semibold text-gray-500">All Tasks</h2>

        <TaskList
          tasks={tasks}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="w-full mt-5 flex items-center justify-center gap-2 p-3 bg-[#e2eafb] text-[#0049fb] rounded-lg"
        >
          {showCreateForm ? (
            "Cancel"
          ) : (
            <>
              {" "}
              <Plus className="h-5 w-5" /> New Task{" "}
            </>
          )}
        </button>

        {showCreateForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-6 relative">
              <button
                onClick={resetForm}
                className="absolute top-4 text-red-500 right-4 hover:text-red-500 transition-colors bg-[#ffffff] border-2 border-gray-100"
              >
                &times;
              </button>

              <h2 className="text-xl font-semibold mb-4">
                {editingTask
                  ? `Edit Task: ${editingTask.title}`
                  : "Create Task"}
              </h2>

              <TaskInput
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                status={status}
                setStatus={setStatus}
              />

              <WeatherInput
                city={city}
                setCity={setCity}
                weather={weather}
                fetchWeatherForCity={fetchWeatherForCity}
              />

              <div className="flex justify-between gap-4 mt-4">
                <button
                  onClick={editingTask ? handleUpdateTask : handleCreateTask}
                  className="w-full bg-blue-500 text-white p-3 rounded-lg"
                >
                  {editingTask ? "Update Task" : "Create Task"}
                </button>
                <button
                  onClick={resetForm}
                  className="w-full bg-gray-500 text-white p-3 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskForm;
