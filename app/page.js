"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TaskForm from "@/components/TaskForm";
import TaskPreview from "@/components/TaskPreview";
import TaskList from "@/components/TaskList";
import { getTasks, saveTask } from "@/lib/localStorage";

const Home = () => {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleTaskSubmit = (newTask) => {
    saveTask(newTask);
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setTask(null);
  };

  return (
    <main className="p-4 max-w-lg mx-auto h-screen flex flex-col gap-4">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <Link href={"/"} className="text-xl font-bold text-gray-700">
          📌 AI Task Manager
        </Link>
        <Link
          href={"/dashboard"}
          className="text-white font-semibold bg-secondary hover:bg-primary px-4 py-2 rounded-lg transition"
        >
          Dashboard
        </Link>
      </header>

      {/* Main */}
      <section className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-2 bg-gray-100 rounded-lg">
          <TaskList tasks={tasks} />
        </div>

        {task && (
          <div className="p-4 bg-white shadow-md rounded-lg">
            <TaskPreview
              task={task}
              onClose={() => setTask(null)}
              onSave={() => handleTaskSubmit(task)}
            />
          </div>
        )}
        <TaskForm onTaskSubmit={setTask} />
      </section>
    </main>
  );
};

export default Home;
