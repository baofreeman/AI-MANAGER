"use client";
import { useState } from "react";

const TaskForm = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!title.trim() || !description.trim()) {
      setError("⚠️ Title and Description cannot be empty.");
      return;
    }
    setError("");

    try {
      setIsLoading(true);
      const res = await fetch("/api/generate-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();
      if (!data.error) {
        const newTask = {
          id: Date.now(),
          date: new Date().toLocaleString(),
          taskTitle: data.taskTitle,
          taskDescription: data.taskDescription,
          userRequestTitle: title,
          userRequestDescription: description,
        };
        onTaskSubmit(newTask);
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg w-full">
      <h2 className="text-lg font-bold text-primaryText mb-3">
        📝 Create a Task
      </h2>

      <div className="flex flex-col gap-3">
        <input
          className="p-2 text-sm text-secondaryText border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="p-2 text-sm text-secondaryText border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleGenerate();
            }
          }}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          className="bg-secondary hover:bg-primary text-white font-semibold p-2 rounded-lg disabled:opacity-50"
          onClick={handleGenerate}
          disabled={isLoading}
        >
          {isLoading ? "⏳ Generating..." : "🚀 Generate Draft"}
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
