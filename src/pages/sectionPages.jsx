import { HeaderNav } from "./compunent/a_header/headerNav";
import { Head } from "./compunent/a_head/head";
import { MainNewsArea } from "./compunent/sectionPagesCompunent/mainNewsSection";
import { Footer } from "./compunent/footer/footer";

export const SectionPages = ({ sectionFn, sectionNews }) => {
  return (
    <>
      <HeaderNav sectionFn={sectionFn}></HeaderNav>
      <Head sectionFn={sectionFn}></Head>
      <MainNewsArea sectionNews={sectionNews}></MainNewsArea>
      <Footer></Footer>
    </>
  );
};
