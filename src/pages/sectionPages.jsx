import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { SectionPage } from "./compunent/section_pages_compunent/Section_pages_compunent";
import { Footer } from "./compunent/footer_compunent/Footer";
import { Bennar } from "./compunent/bennar_compunent/Bennar";

export const SectionPages = ({ sectionFn, sectionNews }) => {
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>
      <Bennar sectionFn={sectionFn}></Bennar>
      <SectionPage sectionNews={sectionNews}></SectionPage>
      <Footer></Footer>
    </>
  );
};
