import { Layout } from "src/components/Layout";

const Home = () => {
  const handleClick = () => {
    window.alert("Hello World!");
  };

  return (
    <Layout>
      <button className="px-5 py-2" onClick={handleClick}>
        Button
      </button>
    </Layout>
  );
};

export default Home;
