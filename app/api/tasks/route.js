let taskList = [];

export async function GET() {
  return Response.json(taskList);
}

export async function POST(req) {
  const newTask = await req.json();
  const taskWithDate = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    ...newTask,
  };

  taskList.unshift(taskWithDate);
  return Response.json(taskWithDate);
}
