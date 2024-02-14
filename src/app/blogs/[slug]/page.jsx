import { getBlogBySlug, getMarkdownBlogs } from "@/utils";

export async function generateStaticParams() {
  const res = await getMarkdownBlogs();
  return res.map((blog) => ({
    slug: blog.slug
  }));
}

async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <>
      <h1>Blog Detail Page {params.slug}</h1>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <hr />
          <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
        </div>
      ) : (
        <div>Blog not found</div>
      )}
    </>
  );
}

export default BlogDetailPage;
