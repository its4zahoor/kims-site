import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "KIMS - Home"}</title>
      </Head>
    </>
  );
};

export default PageHead;
