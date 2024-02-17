import Link from "next/link";

export function Navigation() {
  const render = (
    <>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navigation-item">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="navigation-item">
          <Link href="/portfolios">Portfolios</Link>
        </li>
        <li className="navigation-item">
          <Link href="/todos">Todos</Link>
        </li>
      </ul>
    </>
  );

  return render;
}
