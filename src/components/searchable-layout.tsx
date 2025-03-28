import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //경로 설정
  const router = useRouter();

  //검색어 설정
  const [search, setSearch] = useState("");

  //검색 클릭
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //검색어 입력시 검색어 상태 변경 (보통 쿼리에서 얻어온 값들은 array로 받아옴 그래서 as string; 해야함.)
  const q = router.query.q as string;
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  //검색버튼 제출 -> 버튼 클릭시 검색어를 쿼리스트링으로 전달!
  const onSubmit = () => {
    //검색어가 비어있으면 그냥 리턴 그리고 검색어와 주소창 값이 같지 않으면 리턴
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
          onChange={onChangeSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          value={search}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
