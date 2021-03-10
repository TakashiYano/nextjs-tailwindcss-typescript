import Head from "next/head";
import { Layout } from "src/components/Layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="dark:text-white">About</h2>
    </Layout>
  );
};

export default About;
