import { HeaderNav } from "./compunent/a_header/headerNav";
import { Head } from "./compunent/a_head/head";
import { Recomendation } from "./compunent/b_recomendation/recomendaton";
import { New } from "./compunent/c_new/nex";
import { Powered } from "./compunent/d_powered/powered";

export const Home = ({ urlFn }) => {
  return (
    <>
      <HeaderNav></HeaderNav>
      <Head></Head>
      <Recomendation></Recomendation>
      <New urlFn={urlFn}></New>
      <Powered></Powered>
    </>
  );
};
