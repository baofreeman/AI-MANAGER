const STORAGE_KEY = "tasks";

// Get tasks list
export function getTasks() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  }
  return [];
}

// Save task
export function saveTask(task) {
  if (typeof window !== "undefined") {
    const tasks = getTasks();
    const updatedTasks = [task, ...tasks];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  }
}
