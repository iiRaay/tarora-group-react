import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../analytics";

const RouteWithAnalytics = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return children;
};

export default RouteWithAnalytics