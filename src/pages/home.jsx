import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { Bennar } from "./compunent/bennar_compunent/Bennar";
import { Recomendation } from "./compunent/recomendation_compunent/Recomendaton";
import { ArticleContainer } from "./compunent/article_container_compunent/Article_container";
import { AdsArea } from "./compunent/ads_compunent/Ads_area";
import { Powered } from "./compunent/powered_compunent/Powered";
import { Footer } from "./compunent/footer_compunent/Footer";

export const Home = ({ urlFn, sectionFn }) => {
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>

      <Bennar sectionFn={sectionFn}></Bennar>

      <Recomendation></Recomendation>

      <ArticleContainer urlFn={urlFn}></ArticleContainer>

      <AdsArea></AdsArea>

      <Powered></Powered>

      <Footer></Footer>
    </>
  );
};
