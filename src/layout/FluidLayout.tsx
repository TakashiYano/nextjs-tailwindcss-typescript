import type { CustomLayout } from "next";

import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => (
  <div className="flex flex-col min-h-screen">
    <header>
      <Header />
    </header>
    <main className="flex-1 bg-red-300">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);
