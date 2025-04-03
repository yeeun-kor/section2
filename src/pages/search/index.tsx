import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import { useRouter } from "next/router";
import { ReactNode } from "react";
export default function Search() {
  const router = useRouter();
  const q = router.query.q as string;

  return (
    <div>
      {books
        .filter((book) => book.title.includes(q))
        .map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
