import { BlogList } from "@/components/blogs/BlogList";
import { PortfoliosList } from "@/components/portfolios/PortfoliosList";
import { delay } from "@/utils";
import { Suspense } from "react";

async function getBlogs() {
  await delay(4000);

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
  await delay(1000);
  const response = await fetch("http://localhost:3001/api/portfolios", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

async function sequential() {
  const blogs = await getBlogs();
  const portfolios = await getPortfolios();
  return { blogs: blogs.data, portfolios: portfolios.data };
}

async function parallel() {
  const blogsPromise = getBlogs();
  const portfoliosPromise = getPortfolios();
  const [blogs, portfolios] = await Promise.all([
    blogsPromise,
    portfoliosPromise,
  ]);
  return { blogs: blogs.data, portfolios: portfolios.data };
}

async function timedFetch(fetchStyle) {
  const timeNow = Date.now();
  const res = await fetchStyle();
  const { blogs, portfolios } = res;
  const timeAfter = Date.now();
  console.log("Time:", timeAfter - timeNow);
  return { blogs, portfolios };
}

export default async function Home() {
  const { blogs, portfolios } = await timedFetch(parallel);
  // const { blogs, portfolios } = await parallel();

  // const { blogs, portfolios } = await timedFetch(sequential);
  // const { blogs, portfolios } = await sequential();

  return (
    <>
      <SuspenseHome />
      {/* <NonSuspenseHome /> */}
    </>
  );
}

const SuspenseHome = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NonSuspenseHome />
    </Suspense>
  );
};

const NonSuspenseHome = async () => {
  const { blogs, portfolios } = await timedFetch(parallel);
  // const { blogs, portfolios } = await parallel();

  // const { blogs, portfolios } = await timedFetch(sequential);
  // const { blogs, portfolios } = await sequential();

  return (
    <>
      <BlogList blogs={blogs} />
      <PortfoliosList portfolios={portfolios} />
    </>
  );
};
