import { BlogList } from "@/components/blogs/BlogList";
import { PortfoliosList } from "@/components/portfolios/PortfoliosList";
import { delay } from "@/utils";
import { Suspense } from "react";
import MarkdownBlogList from "@/components/blogs/MarkdownBlogList";
import MarkdownPortfoliosList from "@/components/portfolios/MarkdownPortfoliosList";

async function getBlogs() {
  // await delay(4000);

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

    next: {
      /**
       * The `revalidate` property is used to specify the number of seconds after
       * which a page revalidation should occur. If we set the value to 2, the
       * server will revalidate the page every 2 seconds, meaning that the server
       * will regenerate the page every 2 seconds, and then serve the generated
       * page to the user each time the user requests it.
       */
      // revalidate: 2,

      /**
       * The `tags` property is used to specify the tags of the page. If we set
       * the value to ["blogs"], the server will only revalidate the page when
       * the page with the specified tags is modified. If the page with the
       */
      tags: ["blogs"],
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

async function getPortfolios() {
  // await delay(1000);
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
  // console.log("Time:", timeAfter - timeNow);
  return { blogs, portfolios };
}

export default async function HomePage() {
  // const { blogs, portfolios } = await timedFetch(parallel);
  // const { blogs, portfolios } = await parallel();

  // const { blogs, portfolios } = await timedFetch(sequential);
  // const { blogs, portfolios } = await sequential();

  return (
    <>
      <div className="home-page-container">
        {/* <SuspenseHome /> */}
        <NonSuspenseHome />

        {/* Markdown Items */}

        <MarkdownBlogList />
        <MarkdownPortfoliosList />
      </div>
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
