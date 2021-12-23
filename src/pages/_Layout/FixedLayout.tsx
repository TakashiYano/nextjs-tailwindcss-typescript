import type { CustomLayout } from "next";

import { Footer } from "src/pages/_Layout/Footer";
import { Header } from "src/pages/_Layout/Header";
import { LayoutErrorBoundary } from "src/pages/_Layout/LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto max-w-screen-md min-h-screen">
      <Header />
      <main className="bg-blue-300">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
