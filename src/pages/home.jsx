import { Navbar } from "./compunent/navbar_compunent/Navbar";
import { Bennar } from "./compunent/bennar_compunent/Bennar";
import { Recomendation } from "./compunent/recomendation_compunent/Recomendaton";
import { ArticleContainer } from "./compunent/article_container_compunent/Article_container";
import { AdsArea } from "./compunent/ads_compunent/Ads_area";
import { Powered } from "./compunent/powered_compunent/Powered";
import { Footer } from "./compunent/footer_compunent/Footer";
import { useRef, useEffect } from "react";

export const Home = ({ urlFn, sectionFn }) => {
  // const target = useRef(null);
  // useEffect(() => {
  //   if (target.current && !target.current.firstChild) {
  //     const script = document.createElement("script");
  //     // script.async = "async";
  //     script.setAttribute("async", "async");
  //     script.setAttribute("data-cfasync", false);
  //     script.src =
  //       "//pl22944050.profitablegatecpm.com/39158969dbde6d27fa3d4876361aeb23/invoke.js";

  //     const div = document.createElement("div");
  //     div.id = "container-39158969dbde6d27fa3d4876361aeb23";

  //     target.current.append(script);
  //     target.current.append(div);
  //     console.log("running");
  //   }
  // }, [target]);
  return (
    <>
      <Navbar sectionFn={sectionFn}></Navbar>

      <Bennar sectionFn={sectionFn}></Bennar>

      <Recomendation></Recomendation>

      <ArticleContainer urlFn={urlFn}></ArticleContainer>

      {/* <div ref={target}></div> */}

      <AdsArea></AdsArea>

      {/* <AdsArea></AdsArea> */}

      <Powered></Powered>

      <Footer></Footer>
    </>
  );
};
