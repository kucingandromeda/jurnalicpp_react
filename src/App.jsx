import "./App.css";
import { HeaderNav } from "./compunent/a_header/headerNav";
import { Head } from "./compunent/a_head/head";
import { Recomendation } from "./compunent/b_recomendation/recomendaton";
import { New } from "./compunent/c_new/nex";
import { Powered } from "./compunent/d_powered/powered";

function App() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <Head></Head>
      <Recomendation></Recomendation>
      <New></New>
      <Powered></Powered>
    </>
  );
}

export default App;
