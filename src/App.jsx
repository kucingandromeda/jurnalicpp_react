import "./App.css";
import { Head } from "./compunent/a_head/head";
import { Recomendation } from "./compunent/b_recomendation/recomendaton";
import { New } from "./compunent/c_new/nex";
import { Powered } from "./compunent/d_powered/powered";

function App() {
  return (
    <>
      <Head></Head>
      <Recomendation></Recomendation>
      <New></New>
      <Powered></Powered>
    </>
  );
}

export default App;
