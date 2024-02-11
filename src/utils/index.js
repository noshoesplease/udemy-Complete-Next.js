import path from "path";
import fs from "fs";

const blogsMarkownPath = path.join(process.cwd(), "src", "content", "blogs");

const portfolisoMarkownPath = path.join(
  process.cwd(),
  "src",
  "content",
  "portfolios"
);

/**
 * Lol
 */
export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getMarkdownBlogs() {
  const blogNames = fs.readdirSync(blogsMarkownPath);
  return blogNames;
}

export function getMarkownPortfolio() {
  const portfolioNames = fs.readdirSync(portfolisoMarkownPath);
  return portfolioNames;
}
