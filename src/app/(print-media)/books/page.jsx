import Link from "next/link";

const BOOKS_COUNT = 20;

export default function BooksPage() {
  function generateBooks() {
    return Array.from({ length: BOOKS_COUNT }, (_, index) => {
      return (
        <>
          <li key={index}>
            <Link href={`/books/${index+1}`}>Book - {index+1 }</Link>
          </li>
        </>
      );
    });
  }

  return (
    <div>
      <h1>Books</h1>
        <ul>{generateBooks()}</ul> 
    </div>
  );
}
