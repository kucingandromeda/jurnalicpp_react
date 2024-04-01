import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { MainNewsArea } from "./compunent/sectionPagesCompunent/mainNewsSection";
import { Footer } from "./compunent/footer/footer";
import { Bennar } from "./compunent/bennar_compunent/Bennar";

export const SectionPages = ({ sectionFn, sectionNews }) => {
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>
      <Bennar sectionFn={sectionFn}></Bennar>
      <MainNewsArea sectionNews={sectionNews}></MainNewsArea>
      <Footer></Footer>
    </>
  );
};
