import { BookData } from "@/types";

export default async function fetchBooks(): Promise<BookData[]> {
  //요청 주소값 불러오기
  const url = `http://localhost:12345/book`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
