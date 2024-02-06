import { BlogList } from "@/components/blogs/BlogList";
import { PortfoliosList } from "@/components/portfolios/PortfoliosList";

async function getBlogs() {
  const response = await fetch("http://localhost:3001/api/blogs", {
    /**
     * The `cache` property is used to specify the cache mode of the request.
     * If we set the value to "no-cache", the server won't cache the request,
     * meaning that the server will employ server side rendering to generate the
     * page each time the user requests it. On the other hand, if we set the
     * value to "default", the server will cache the request, meaning that the
     * server will only generate the page once during build step, and then serve
     * the generated page to the user each time the user requests it.
     */
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

async function getPortfolios() {
  const response = await fetch("http://localhost:3001/api/portfolios", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

export default async function Home() {
  // const blogsJson = await getBlogs();
  // const blogs = blogsJson.data;
  const { data: blogs } = await getBlogs();

  // const portfoliosJson = await getPortfolios();
  // const portfolios = portfoliosJson.data;
  const { data: portfolios } = await getPortfolios();
  return (
    <>
      <BlogList blogs={blogs} />
      <PortfoliosList portfolios={portfolios} />
    </>
  );
}
