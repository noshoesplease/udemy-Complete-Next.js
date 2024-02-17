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

  const navItems = [
    {
      isActive: pathName === "/",
      href: "/",
      text: "Home",
    },
    {
      isActive: pathName.includes("/blogs"),
      href: "/blogs",
      text: "Blogs",
    },
    {
      isActive: pathName.includes("/portfolios"),
      href: "/portfolios",
      text: "Portfolios",
    },
    {
      isActive: pathName.includes("/todos"),
      href: "/todos",
      text: "Todos",
    },
    {
      isActive: pathName.includes("/content"),
      href: `/content/${generateRandomString()}`,
      text: "Content",
    },
    {
      isActive: pathName.includes("/books"),
      href: `/books`,
      text: "Books",
    },
    {
      isActive: pathName.includes("/magazines"),
      href: "/magazines",
      text: "Magazines",
    },
  ];

  const render = (
    <>
      <ul className="navigation-list">
        {navItems.map((item, index) => 
        <li key={index} className="navigation-item">
          <Link className={`link${item.isActive ? " active" : ""}`} href={item.href}>
            {item.text}
          </Link>
        </li>
        )}
     
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
