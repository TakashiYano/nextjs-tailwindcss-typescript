import type { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="bg-green-100">{props.children}</main>
      <Footer />
    </>
  );
};
