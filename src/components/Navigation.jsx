"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathName = usePathname();
  const render = (
    <>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link className={`link${pathName === "/" ? " active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link className={`link${pathName.includes('/blogs') ? " active" : ""}`} href="/blogs">
            Blogs
          </Link>
        </li>
        <li className="navigation-item">
          <Link className={`link${pathName.includes('/portfolios') ? " active" : ""}`} href="/portfolios">
            Portfolios
          </Link>
        </li>
        <li className="navigation-item">
          <Link className={`link${pathName.includes('/todos')  ? " active" : ""}`} href="/todos">
            Todos
          </Link>
        </li>
      </ul>
    </>
  );

  return render;
}
