import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date(); // 현재 날짜와 시간 갖고있는 객체 저장하기
  res.json({ time: date.toLocaleString() }); //응답값을 json형식으로 보내기
}
