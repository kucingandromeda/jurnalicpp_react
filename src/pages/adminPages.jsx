import { Head } from "./compunent/a_head/head";
import { Publish } from "./compunent/ADMIN_COMPUNENT/publish";

export const AdminPages = () => {
  return (
    <>
      <Head admin={true}></Head>
      <Publish></Publish>
    </>
  );
};
