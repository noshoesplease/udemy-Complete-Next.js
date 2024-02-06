import { BlogList } from "@/components/blogs/BlogList";
import { PortfoliosList } from "@/components/portfolios/PortfoliosList";

async function getBlogs() {
  const response = await fetch("http://localhost:3001/api/blogs", {
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
