import path from "path";
import fs from "fs";
import matter from "gray-matter";

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

  const blogs = blogNames.map((blogName) => {
    const filePath = path.join(blogsMarkownPath, blogName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    data.slug = blogName.replace(/\.md$/, "");

    return { ...data, content };
  });

  return blogs;
}

export function getMarkownPortfolio() {
  const portfolioNames = fs.readdirSync(portfolisoMarkownPath);

  const portfolios = portfolioNames.map((portfolioName) => {
    const filePath = path.join(portfolisoMarkownPath, portfolioName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    data.slug = portfolioName.replace(".md", "");

    return { ...data, content };
  });

  return portfolios;
}

export function getPortfolioBySlug(slug) {
  return [];
}
export function getBlogBySlug(slug) {
  return [];
}
