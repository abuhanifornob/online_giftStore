import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="confirmPassword"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p className="text-xl font-medium font-serif">
              Already Have a Account ? Please !
              <Link className="text-orange-300" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center w-full mb-4">
            <button className="btn text-xl w-2/5 flex justify-center items-center">
              <FaGoogle /> With Google
            </button>
            <div className="divider divider-horizontal">OR</div>
            <button className="btn text-xl w-2/5 flex justify-center items-center">
              <FaGithub /> With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
