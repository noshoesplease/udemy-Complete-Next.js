import { Suspense } from "react";

const getBook = async (postId) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!reponse.ok) {
    // throw new Error('Network response was not ok');
    return false;
  }

  return reponse.json();
};

const Book = async ({ id }) => {
  const book = await getBook(id);
  const render = (
    <div>
      <h1>{book.id}</h1>
      <div>title: {book.title}</div>
        <div>body: {book.body}</div>
    </div>
  );
  if (!book) {
    return <div>Book not found</div>;
  }
  return render;
};

const BookDetailPage = async ({ params }) => {

  const render = (
    <>
      Book:
      <Suspense fallback={<div>Loading...</div>}>
        <Book id={params.id} />
      </Suspense>
    </>
  );
  return render;
};

export default BookDetailPage;
