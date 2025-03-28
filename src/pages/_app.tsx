import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactNode } from "react";

type nextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};
// NextPageWithLayout 타입을 정의합니다. getLayout 속성을 추가합니다.
// 이 타입을 사용하여 페이지 컴포넌트에서 getLayout 함수를 정의할 수 있습니다.};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: nextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
