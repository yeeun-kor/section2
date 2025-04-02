import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { InferGetServerSidePropsType } from "next";
import fetchRandom from "@/lib/fetch-random";

export const getServerSideProps = async () => {
  const allBooks = await fetchBooks();
  const recBooks = await fetchRandom();

  return {
    props: { allBooks, recBooks },
  };
};

export default function Home({
  allBooks,
  recBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(allBooks);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서 </h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
