"use client";
import { useEffect, useState } from "react";
import { getTasks } from "@/lib/localStorage";
import ReactMarkdown from "react-markdown";

const Dashboard = ({ tasks }) => {
  const [localTasks, setLocalTasks] = useState([]);

  useEffect(() => {
    setLocalTasks(getTasks());
  }, [tasks]);

  return (
    <div className="p-8 bg-white text-gray-700 shadow-lg rounded-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">📋 Task Dashboard</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-primaryText text-left">
              <th className="border p-3 align-top">Task Title</th>
              <th className="border p-3 align-top w-1/3">Task Description</th>
              <th className="border p-3 align-top">User Request Title</th>
              <th className="border p-3 align-top">User Request Description</th>
              <th className="border p-3 align-top">Date</th>
            </tr>
          </thead>
          <tbody>
            {localTasks.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-5 text-center text-gray-500">
                  No tasks submitted yet.
                </td>
              </tr>
            ) : (
              localTasks.map((task) => (
                <tr
                  key={task.id}
                  className="hover:bg-blue-50 transition text-wrap text-sm text-secondaryText"
                >
                  <td className="border p-3 font-semibold align-top">
                    {task.taskTitle}
                  </td>
                  <td className="border p-3 align-top">
                    <div className="max-h-40 overflow-y-auto">
                      <ReactMarkdown>{task.taskDescription}</ReactMarkdown>
                    </div>
                  </td>
                  <td className="border p-3 align-top">
                    {task.userRequestTitle}
                  </td>
                  <td className="border p-3 align-top">
                    {task.userRequestDescription}
                  </td>
                  <td className="border p-3 align-top">
                    📅{" "}
                    {new Date(task.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    - 🕒{" "}
                    {new Date(task.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
