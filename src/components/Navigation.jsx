"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
function generateRandomString(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
export function Navigation() {
  const pathName = usePathname();
  const router = useRouter();
  const render = (
    <>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link className={`link${pathName === "/" ? " active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className={`link${pathName.includes("/blogs") ? " active" : ""}`}
            href="/blogs"
          >
            Blogs
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className={`link${
              pathName.includes("/portfolios") ? " active" : ""
            }`}
            href="/portfolios"
          >
            Portfolios
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className={`link${pathName.includes("/todos") ? " active" : ""}`}
            href="/todos"
          >
            Todos
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className={`link${pathName.includes("/content") ? " active" : ""}`}
            href={`/content/${generateRandomString()}`}
          >
            Content
          </Link>
        </li>
        <li className="navigation-item">
          <button
            className="btn btn-primary"
            onClick={() => {
              router.push("/");
            }}
          >
            Go Home
          </button>
        </li>
      </ul>
    </>
  );

  return render;
}
