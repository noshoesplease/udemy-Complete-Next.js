import { getMarkownPortfolio } from "@/utils";

const MarkdownPortfoliosList = () => {
  const portfolios = getMarkownPortfolio();
  return (
    <>
      <h2 className="content-section-title">Markdown Portfolios</h2>

      {portfolios.map((portfolio, index) => (
        <div key={index} className="content-list-item">
          {portfolio}
        </div>
      ))}

      <div className="content-list"></div>
    </>
  );
};

export default MarkdownPortfoliosList;
