import { Button } from "src/components/Button";
import { Layout } from "src/components/Layout";

const Home = () => {
  return (
    <Layout>
      <h2 className="dark:text-white">Home</h2>
      <Button
        button
        className="px-5 py-2 font-bold"
        variant="solid"
        onClick={() => {
          window.alert("Hello World!");
        }}
      >
        Button
      </Button>
    </Layout>
  );
};

export default Home;
