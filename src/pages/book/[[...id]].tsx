import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query; // [1, 2, 3] 형태로 들어옴
  return (
    <>
      <h1>book페이지</h1>
      <div>book 페이지 넘버는? : {id}</div>
    </>
  );
}
