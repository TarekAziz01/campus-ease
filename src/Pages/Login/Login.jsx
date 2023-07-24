import { Link } from "react-router-dom";


const Login = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              {/* onSubmit={handleRegister} */}
              <h1 className="text-5xl font-bold text-center">Login</h1>
              {/* <h2 className="text-red-400 mt-5">{error}</h2> */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  //   type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p
                  //   onClick={() => setShow(!show)}
                  >
                    <small>
                      {/* {show ? (
                        <span>Hide Password</span>
                      ) : (
                        <span>Show Password</span>
                      )} */}
                    </small>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="mt-2">
                New here?
                <Link className="text-rose-400 font-bold" to="/signUp">
                  Register
                </Link>
              </p>
            </form>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
    );
};

export default Login;