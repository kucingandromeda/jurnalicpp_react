import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { ArticleArea } from "./compunent/article_show_compunent/b_newsArea/article_area";
import { Footer } from "./compunent/footer_compunent/Footer";
import { AdsArea } from "./compunent/ads_compunent/Ads_area";

export const NewsShowing = ({ sectionFn, apiData }) => {
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>
      <ArticleArea apiData={apiData}></ArticleArea>
      <AdsArea></AdsArea>
      <Footer></Footer>
    </>
  );
};
