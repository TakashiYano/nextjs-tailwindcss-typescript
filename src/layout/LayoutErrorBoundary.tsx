import { ReactNode, FC } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error }: FallbackProps) => (
  <div>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

/**
 * @package
 */
export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
