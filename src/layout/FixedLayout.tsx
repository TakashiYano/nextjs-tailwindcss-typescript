import type { CustomLayout } from "next";

import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => (
  <div className="flex flex-col mx-auto max-w-screen-md min-h-screen">
    <header>
      <Header />
    </header>
    <main className="flex-1 bg-blue-300">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);
