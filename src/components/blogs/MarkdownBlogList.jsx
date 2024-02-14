import Image from "next/image";
import { getMarkdownBlogs } from "@/utils";
import Link from "next/link";

const MarkdownBlogList = () => {
  const blogs = getMarkdownBlogs();
  return (
    <>
      <h2 className="content-section-title">Markdown Blogs</h2>
      <div className="content-list">
      {blogs && blogs.map((blog,index) => (
          <div className="content-item" key={index}>
            <div className="content-item__image-container">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill={true}
                sizes="(max-width: 768px)"
                priority={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-item__header">
              <div>{blog.title}</div>
              <div>{blog.description}</div>
              <Link href={`/blogs/${blog.slug}`}>
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarkdownBlogList;
