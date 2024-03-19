import { Link, useRouteError } from "react-router-dom";

const ArrorPaje = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>go back where you from</p>
          <Link to="/">Home</Link>
        </div>
      )}
    </div>
  );
};

export default ArrorPaje;
