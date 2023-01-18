import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //Check URL params for password
  const [checked] = useSearchParams();
  if (!checked.get("password") || checked.get("password") !== "secret") {
    return <Navigate to="/unauthorized/"></Navigate>;
  } else {
    return children;
  }
};

export default ProtectedRoute;
