import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import { ReactNode } from "react";
export default function Search() {
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
