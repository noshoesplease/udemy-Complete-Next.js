import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const blogsMarkownPath = path.join(process.cwd(), "src", "content", "blogs");
const portfoliosMarkownPath = path.join(
  process.cwd(),
  "src",
  "content",
  "portfolios"
);

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(markdown);
  return result;
}

/**
 * Lol
 */
export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getMarkdownBlogs() {
  const blogNames = fs.readdirSync(blogsMarkownPath);

  const blogs = blogNames.map(async (blogName) => {
    const filePath = path.join(blogsMarkownPath, blogName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    data.slug = blogName.replace(/\.md$/, "");

    const htmlContent = await markdownToHtml(content);
    return { ...data, content: htmlContent.value };
  });

  return Promise.all(blogs);
}

export function getMarkdownPortfolios() {
  const portfolioNames = fs.readdirSync(portfoliosMarkownPath);

  const portfolios = portfolioNames.map(async (portfolioName) => {
    const filePath = path.join(portfoliosMarkownPath, portfolioName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    data.slug = portfolioName.replace(".md", "");

    const htmlContent = await markdownToHtml(content);
    return { ...data, content: htmlContent.value };
  });

  return Promise.all(portfolios);
}

export async function getPortfolioBySlug(slug) {
  let result = null;

  const markdownPortfolios = await getMarkdownPortfolios();
  const portfolio = markdownPortfolios.find((p) => p.slug === slug);
  if (portfolio) {
    result = portfolio;
  } else {
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "portfolios.json"
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const portfolios = JSON.parse(fileContent);
    result = portfolios.find((p) => p.slug === slug);
  }

  return result;
}

export async function getBlogBySlug(slug) {
  let result = null;

  const markdownBlogs = await getMarkdownBlogs();
  const blog = markdownBlogs.find((b) => b.slug === slug);
  if (blog) {
    result = blog;
  } else {
    const filePath = path.join(process.cwd(), "src", "content", "blogs.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const blogs = JSON.parse(fileContent);
    result = blogs.find((b) => b.slug === slug);
  }

  return result;
}
