import Image from "next/image";
import Link from "next/link";

export const BlogList = ({ blogs }) => {
  return (
    <>
      <h2 className="content-section-title">Blogs</h2>
      <div className="content-list">
        {blogs &&
          blogs.map((blog) => (
            <div className="content-item" key={blog.slug}>
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
                <Link href={`/blogs/${blog.slug}`}>Read More</Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
