import type { CustomLayout } from "next";

import { Footer } from "src/pages/_Layout/Footer";
import { Header } from "src/pages/_Layout/Header";
import { LayoutErrorBoundary } from "src/pages/_Layout/LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Header />
      <main className="bg-red-300">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
