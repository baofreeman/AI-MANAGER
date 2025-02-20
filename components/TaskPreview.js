"use client";

import ReactMarkdown from "react-markdown";

const TaskPreview = ({ task, onClose, onSave }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full transform scale-95 animate-fade-in">
        <h2 className="text-xl font-bold text-gray-800">{task.taskTitle}</h2>
        <div className="text-secondaryText text-base font-medium mt-1 prose max-w-none max-h-40 overflow-y-auto p-2 border border-gray-300 rounded-lg">
          <ReactMarkdown>{task.taskDescription}</ReactMarkdown>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-primary text-white transition"
            onClick={onSave}
          >
            Submit Task Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskPreview;
