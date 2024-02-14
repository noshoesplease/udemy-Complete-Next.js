import Image from "next/image";
import { getMarkdownPortfolios } from "@/utils";
import Link from "next/link";

const MarkdownPortfoliosList = () => {
  const portfolios = getMarkdownPortfolios();
  return (
    <>
      <h2 className="content-section-title">Markdown Portfolios</h2>
      <div className="content-list">
        {portfolios &&
          portfolios.map((portfolio,index) => (
            <div className="content-item" key={index}>
              <div className="content-item__image-container">
                <Image
                  src={portfolio.coverImage}
                  alt={portfolio.title}
                  fill={true}
                  sizes="(max-width: 768px)"
                  priority={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="content-item__header">
                <div>{portfolio.title}</div>
                <div>{portfolio.description}</div>
                <Link href={`/portfolios/${portfolio.slug}`}>
                  See More
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MarkdownPortfoliosList;
