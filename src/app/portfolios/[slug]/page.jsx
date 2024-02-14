import { getPortfolioBySlug, getMarkdownPortfolios } from "@/utils";

export async function generateStaticParams() {
  const res = await getMarkdownPortfolios();
  return res.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

async function PortfolioDetailPage({ params }) {
  const portfolio = await getPortfolioBySlug(params.slug);
  return (
    <>
      <h1>Portfolio Detail Page {params.slug}</h1>
      {portfolio ? (
        <div>
          <h1>{portfolio.title}</h1>
          <p>{portfolio.description}</p>
          <hr />
          <div dangerouslySetInnerHTML={{__html: portfolio.content}}></div>
        </div> 
      ) : (
        <div>Portfolio not found</div>
      )}
    </>
  );
}

export default PortfolioDetailPage;
