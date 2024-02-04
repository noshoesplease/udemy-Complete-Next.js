import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";

import { BlogList } from "@/components/blogs/bloglist";
import { PortfoliosList } from "@/components/portfolios/PortfoliosList";

export default function Home() {
  return (
    <>
      <BlogList blogs={blogs} />
      <PortfoliosList portfolios={portfolios} />
    </>
  );
}
