import Link from "next/link";
import style from "./global-layout.module.css"; // css import

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // children: React.ReactNode; // props로 children을 받아옵니다.
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚ONE BITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @연의</footer>
    </div>
  );
}
