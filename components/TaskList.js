"use client";

import ReactMarkdown from "react-markdown";

const TaskList = ({ tasks }) => {
  return (
    <div className="flex-1 mt-4 p-5">
      <h2 className="font-bold text-xl text-primaryText mb-4">
        📋 Submitted Tasks
      </h2>
      <div className="w-full max-h-[400px] space-y-4">
        {tasks.length === 0 ? (
          <p className="text-primaryText text-center">
            No tasks submitted yet.
          </p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition-all hover:shadow-md"
            >
              <p className="font-semibold text-lg text-primaryText">
                {task.taskTitle}
              </p>
              <div className="text-secondaryText text-base font-medium mt-1 prose max-w-none">
                <ReactMarkdown>{task.taskDescription}</ReactMarkdown>
              </div>
              <p className="text-sm text-accentText mt-2">
                📅 {new Date(task.date).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
