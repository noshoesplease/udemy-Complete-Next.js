import { getPortfolioBySlug } from "@/utils";

function PortfolioDetailPage({ params }) {
  const portfolio = getPortfolioBySlug(params.slug);
  return (
    <>
      <h1>Portfolio Detail Page {params.slug}</h1>
      {portfolio.length > 0 ? (
        <div>
          <h1>{portfolio[0].title}</h1>
          <p>{portfolio[0].description}</p>
        </div>
      ) : (
        <div>Portfolio not found</div>
      )}
    </>
  );
}

export default PortfolioDetailPage;
