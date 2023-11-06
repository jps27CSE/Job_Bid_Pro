import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingSpinner2 from "../components/looties/LoadingSpinner2.json";
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <Lottie
        className="mx-auto w-80"
        animationData={LoadingSpinner2}
        loop={true}
      />
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
