import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  interface RouteError extends Error {
    statusText?: string;
    status?: number;
  }
  const error = useRouteError() as RouteError | null;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
