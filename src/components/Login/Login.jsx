import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import LoginAnimation from "../looties/login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        axios
          .post("http://localhost:5000/jwt", result?.user?.email, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success) {
              console.log(res);
            }
          });

        toast.success(`Google Logging Successfully..
       Email: ${result.user.email}
      `);
        if (location.state === null) {
          navigate("/");
        } else {
          navigate(`${location.state}`);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const sendingUser = { email };
        axios
          .post("http://localhost:5000/jwt", sendingUser, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success) {
              console.log(res);
            }
          });

        toast.success(`
        Login Successfully!...................

        Email : ${result.user.email} 
        `);
        if (location.state === null) {
          navigate("/");
        } else {
          navigate(`${location.state}`);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>JobBidPro | Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie
                className="mx-auto w-80"
                animationData={LoginAnimation}
                loop={true}
              />
              <h1 className="text-5xl font-bold ">Login now!</h1>

              <p className="py-6">
                Welcome back! Please sign in to access your account or post a
                job. If you are new here, you can create an account quickly and
                easily to start posting or bidding on jobs. We are here to
                connect you with job opportunities and make your job search or
                hiring experience even better.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>
                  Create an Account..{" "}
                  <Link to="/register">
                    <span className="cursor-pointer text-blue-400">
                      Register Now
                    </span>
                  </Link>
                </p>
              </form>
              <div className="flex mx-auto p-4">
                <button onClick={handleGoogleLogin} className="btn btn-ghost">
                  <FcGoogle className="text-2xl" />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
