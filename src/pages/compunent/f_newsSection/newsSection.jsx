import { HeaderNav } from "../a_header/headerNav";
import { Head } from "../a_head/head";
import { MainNewsSection } from "./compunent/mainNews";

export const NewsSection = () => {
  return (
    <>
      <HeaderNav></HeaderNav>
      <Head></Head>
      <h1>News</h1>
      <MainNewsSection></MainNewsSection>
    </>
  );
};
