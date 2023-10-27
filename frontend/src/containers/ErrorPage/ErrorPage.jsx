import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 text-green-400">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-500">Oops!</h1>
        <p className="text-lg mt-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg text-green-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
