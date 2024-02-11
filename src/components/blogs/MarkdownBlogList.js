import { getMarkdownBlogs } from "@/utils";

const MarkdownBlogList = () => {
  const blogs = getMarkdownBlogs();
  return (
    <>
      <h2 className="content-section-title">Markdown Blogs</h2>

      {blogs.map((blog, index) => (
        <div key={index} className="content-list-item">
          {blog}
        </div>
      ))}

      <div className="content-list"></div>
    </>
  );
};

export default MarkdownBlogList;
