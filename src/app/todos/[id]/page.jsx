import { Suspense } from "react";

const getTodos = async (todoID) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoID}`
  );
  if (!reponse.ok) {
    // throw new Error('Network response was not ok');
    return false;
  }

  return reponse.json();
};

const Todo = async ({ id }) => {
  const todo = await getTodos(id);
  const render = (
    <div>
      <h1>{todo.id}</h1>
      <div>title: {todo.title}</div>
    </div>
  );
  if (!todo) {
    return <div>Todo not found</div>;
  }
  return render;
};

const ToDoDetailPage = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const render = (
    <>
      Todo:
      <Suspense fallback={<div>Loading...</div>}>
        <Todo id={params.id} />
      </Suspense>
    </>
  );
  return render;
};

export default ToDoDetailPage;
