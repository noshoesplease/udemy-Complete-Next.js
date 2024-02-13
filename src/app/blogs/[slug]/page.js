import { getBlogBySlug } from "@/utils";

function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  return (
    <>
      <h1>Blog Detail Page {params.slug}</h1>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      ) : (
        <div>Blog not found</div>
      )}
    </>
  );
}

export default BlogDetailPage;
