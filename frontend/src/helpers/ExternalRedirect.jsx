import { Route } from "react-router-dom";

const ExternalRedirect = ({ to, ...routeProps }) => {
  return <Route {...routeProps} render={() => (window.location.href = to)} />;
};

export default ExternalRedirect;
