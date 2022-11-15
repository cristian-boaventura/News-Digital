import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex w-full flex-col items-center justify-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
