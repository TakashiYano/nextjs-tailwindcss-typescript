import "src/styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const App = (props: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <>
        <Head>
          <title>nexst</title>
        </Head>
        <props.Component {...props.pageProps} />
      </>
    </ThemeProvider>
  );
};

export default App;
