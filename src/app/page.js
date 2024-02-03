import Image from "next/image";
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";

export default function Home() {
  return (
    <>
      <>
        <h2 className="content-section-title">Blogs</h2>
        <div className="content-list">
          {blogs.map((blog) => (
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
              </div>
            </div>
          ))}
        </div>
      </>
      <>
        <h2 className="content-section-title">Portfolio</h2>
        <div className="content-list">
          {portfolios.map((portfolio) => (
            <div className="content-item" key={portfolio.slug}>
              <div className="content-item__image-container">
                <Image
                  src={portfolio.coverImage}
                  alt={portfolio.title}
                  fill={true}
                  sizes="(max-width: 768px)"
                  priority={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="content-item__header">
                <div>{portfolio.title}</div>
                <div>{portfolio.description}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
}
