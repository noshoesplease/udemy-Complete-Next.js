import Image from "next/image";
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";

export default function Home() {
  return (
    <>
      <>
        <h2>Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={100}
                height={100}
              />
              {blog.title}
              {blog.description}
            </li>
          ))}
        </ul>
      </>

      <>
        <h2>Portfolio</h2>
        <ul>
          {portfolios.map((portfolio) => (
            <li key={portfolio.slug}>
              <Image
                src={portfolio.coverImage}
                alt={portfolio.title}
                width={100}
                height={100}
              />
              {portfolio.title}
              {portfolio.description}
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
