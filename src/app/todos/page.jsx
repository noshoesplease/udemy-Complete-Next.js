import Link from "next/link";

const TODOS_COUNT = 20;

export default function TodosPage() {
  function generateTodos() {
    return Array.from({ length: TODOS_COUNT }, (_, index) => {
      return (
        <>
          <li key={index}>
            <Link href={`/todos/${index+1}`}>Todo - {index+1 }</Link>
          </li>
        </>
      );
    });
  }

  return (
    <div>
      <h1>Todos</h1>
        <ul>{generateTodos()}</ul> 
    </div>
  );
}
