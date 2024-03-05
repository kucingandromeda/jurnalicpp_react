import { HeaderNav } from "./compunent/a_header/headerNav";
import { NewsArea } from "./compunent/e_newsLook/b_newsArea/newsArea";
import { Footer } from "./compunent/e_newsLook/c_footer/footer";

export const NewsShowing = ({ apiData }) => {
  console.log(apiData);
  return (
    <>
      <HeaderNav></HeaderNav>
      <NewsArea></NewsArea>
      {/* <Footer></Footer> */}
    </>
  );
};
