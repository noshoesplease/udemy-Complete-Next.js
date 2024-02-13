import { getPortfolioBySlug } from "@/utils";

function PortfolioDetailPage({ params }) {
  const portfolio = getPortfolioBySlug(params.slug);
  return (
    <>
      <h1>Portfolio Detail Page {params.slug}</h1>
      {portfolio ? (
        <div>
          <h1>{portfolio.title}</h1>
          <p>{portfolio.description}</p>
        </div>
      ) : (
        <div>Portfolio not found</div>
      )}
    </>
  );
}

export default PortfolioDetailPage;
