import { HeaderNav } from "./compunent/a_header/headerNav";
import { NewsArea } from "./compunent/e_newsLook/b_newsArea/newsArea";
import { Footer } from "./compunent/footer/footer";
import { NativeAds } from "./compunent/ads/nativeAds";

export const NewsShowing = ({ sectionFn, apiData }) => {
  return (
    <>
      <HeaderNav sectionFn={sectionFn}></HeaderNav>
      <NewsArea apiData={apiData}></NewsArea>
      <NativeAds></NativeAds>
      <Footer></Footer>
    </>
  );
};
