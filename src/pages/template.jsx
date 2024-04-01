import { HeaderNav } from "./compunent/a_header/headerNav";
import { NewsArea } from "./compunent/e_newsLook/b_newsArea/newsArea";
import { Footer } from "./compunent/footer/footer";
import { AdsArea } from "./compunent/e_newsLook/b_newsArea/ads_area";

export const NewsShowing = ({ sectionFn, apiData }) => {
  return (
    <>
      <HeaderNav sectionFn={sectionFn}></HeaderNav>
      <NewsArea apiData={apiData}></NewsArea>
      <AdsArea></AdsArea>
      <Footer></Footer>
    </>
  );
};
