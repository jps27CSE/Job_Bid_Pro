import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import LoginAnimation from "../looties/register.json";
import Lottie from "lottie-react";
const Register = () => {
  const { registerUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success(`Google Register Successfully..
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Your password should have at least one uppercase character."
      );
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return toast.error(
        "Your password should contain at least one special character."
      );
    }

    registerUser(email, password)
      .then((result) => {
        console.log(result);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast.success(`Registered successfully........
        Email : ${result.user.email} 
        `);
        if (location.state === null) {
          navigate("/");
        } else {
          navigate(`${location.state}`);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen max-w-6xl mx-auto ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <Lottie
                className="mx-auto w-80"
                animationData={LoginAnimation}
                loop={true}
              />
              <h1 className="text-5xl font-bold ">Register now!</h1>
              <p className="py-6 ">
                Ready to get started? Register now to unlock the world of
                cutting-edge technology and electronics job opportunities. Enjoy
                personalized recommendations and a seamless experience in
                finding or posting jobs. Join us today and embrace the future of
                tech careers!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>
                  Already have an Account?..{" "}
                  <Link to="/login">
                    <span className="cursor-pointer text-blue-400">
                      Login Now
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

export default Register;
