import { Suspense } from "react";

const getMagazine = async (postId) => {
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

const Magazine = async ({ id }) => {
  const magazine = await getMagazine(id);
  const render = (
    <div>
      <h1>{magazine.id}</h1>
      <div>title: {magazine.title}</div>
        <div>body: {magazine.body}</div>
    </div>
  );
  if (!magazine) {
    return <div>Magazine not found</div>;
  }
  return render;
};

const MagazineDetailPage = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const render = (
    <>
      Magazine:
      <Suspense fallback={<div>Loading...</div>}>
        <Magazine id={params.id} />
      </Suspense>
    </>
  );
  return render;
};

export default MagazineDetailPage;
