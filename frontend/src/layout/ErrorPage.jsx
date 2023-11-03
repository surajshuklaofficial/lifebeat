import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-ascent-dark">
      <div className="max-w-md p-8 bg-white dark:bg-primary-dark rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-ascent-dark dark:text-ascent-light">
          Oops!
        </h1>
        <p className="text-lg mt-4 text-primary-dark dark:text-primary-light">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-lg text-ascent-dark dark:text-ascent-light">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
