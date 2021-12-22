import { Button } from "src/components/Button";
import { Layout } from "src/components/Layout";

const Home = () => {
  const handleClick = () => {
    window.alert("Hello World!");
  };

  return (
    <Layout>
      <Button button className="px-5 py-2 font-bold" variant="solid" onClick={handleClick}>
        Button
      </Button>
    </Layout>
  );
};

export default Home;
