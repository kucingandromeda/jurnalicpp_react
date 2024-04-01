import { HeaderNav } from "./compunent/a_header/headerNav";
import { Head } from "./compunent/a_head/head";
import { Recomendation } from "./compunent/b_recomendation/recomendaton";
import { New } from "./compunent/c_new/nex";
import { Powered } from "./compunent/d_powered/powered";
import { Footer } from "./compunent/footer/footer";
import { AdsArea } from "./compunent/e_newsLook/b_newsArea/ads_area";

export const Home = ({ urlFn, sectionFn }) => {
  return (
    <>
      <HeaderNav sectionFn={sectionFn}></HeaderNav>
      <Head sectionFn={sectionFn}></Head>
      <Recomendation></Recomendation>
      <New urlFn={urlFn}></New>
      <AdsArea></AdsArea>
      <Powered></Powered>
      <Footer></Footer>
    </>
  );
};
