import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { NewsArea } from "./compunent/e_newsLook/b_newsArea/newsArea";
import { Footer } from "./compunent/footer/footer";
import { AdsArea } from "./compunent/e_newsLook/b_newsArea/ads_area";

export const NewsShowing = ({ sectionFn, apiData }) => {
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>
      <NewsArea apiData={apiData}></NewsArea>
      <AdsArea></AdsArea>
      <Footer></Footer>
    </>
  );
};
