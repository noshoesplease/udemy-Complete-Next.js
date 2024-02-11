import { getBlogBySlug } from "@/utils";

function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  return (
    <>
      <h1>Blog Detail Page {params.slug}</h1>
      {blog.length > 0 ? (
        <div>
          <h1>{blog[0].title}</h1>
          <p>{blog[0].description}</p>
        </div>
      ) : (
        <div>Blog not found</div>
      )}
    </>
  );
}

export default BlogDetailPage;
