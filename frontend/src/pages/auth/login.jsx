import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/login.css";
import img from "../../images/login.png";

function Login() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        <div className="illustration-container">
          <img
            src={img}
            alt="Pet care illustration"
            className="pet-illustration"
          />
        </div>

        <div className="form-container">
          <div className="form-card">
            <h4 className="title">FurEverHome</h4>
            <h2 className="form-title">Login</h2>
            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <div className="forgot-password">
                <Link to="/forgot-password">Forget Password</Link>
              </div>

              <button type="submit" className="submit-button">
                Sign in
              </button>
            </form>

            <div className="form-footer">
              <p>
                Don't have Account?{" "}
                <Link to="/signup" className="form-link">
                  Sign up Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
