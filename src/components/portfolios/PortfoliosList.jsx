import Image from "next/image";
import Link from "next/link"; 

export const PortfoliosList = ({ portfolios }) => {
  return (
    <>
      <h2 className="content-section-title">Portfolio</h2>
      <div className="content-list">
        {portfolios &&
          portfolios.map((portfolio) => (
            <div className="content-item" key={portfolio.slug}>
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
                <Link href={`/portfolios/${portfolio.slug}`}>Read More</Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
