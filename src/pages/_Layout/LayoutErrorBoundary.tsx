import { ReactNode, VFC } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const ErrorFallback = (props: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
    </div>
  );
};

/**
 * @package
 */
export const LayoutErrorBoundary: VFC<{ children: ReactNode }> = (prpos) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{prpos.children}</ErrorBoundary>;
};
