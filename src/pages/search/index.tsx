import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, use } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <h1>search페이지 입니다.</h1>
      <h2>검색어는 {q}입니다.</h2>
    </>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
