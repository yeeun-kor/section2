import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

//현재 브라우저에 대한 모든 정보가 담겨져 잇음.
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q; //검색어 q 저장
  const books = await fetchBooks(q as string); //검색어q를 data값에서 찾기
  return { props: { books } };
};
export default function Search({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book}></BookItem>
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
