import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { Bennar } from "./compunent/bennar_compunent/Bennar";
import { Recomendation } from "./compunent/recomendation_compunent/Recomendaton";
import { New } from "./compunent/c_new/nex";
import { Powered } from "./compunent/d_powered/powered";
import { Footer } from "./compunent/footer/footer";
import { AdsArea } from "./compunent/e_newsLook/b_newsArea/ads_area";

export const Home = ({ urlFn, sectionFn }) => {
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>
      <Bennar sectionFn={sectionFn}></Bennar>
      <Recomendation></Recomendation>
      <New urlFn={urlFn}></New>
      <AdsArea></AdsArea>
      <Powered></Powered>
      <Footer></Footer>
    </>
  );
};
