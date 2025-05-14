import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import "../../styles/signup.css"
import img2 from "../../images/login.png"

function Signup() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        <div className="illustration-container">
          <img src={img2} alt="Pet care illustration" className="pet-illustration" />
        </div>

        <div className="form-container">
          <div className="form-card">
            <h2 className="form-title">Sign up</h2>
            <form className="signup-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input type="text" id="fullName" placeholder="Enter Your Full Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address*</label>
                  <input type="text" id="address" placeholder="Enter Your Address" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input type="tel" id="phone" placeholder="Enter Your Phone Number" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" placeholder="Enter Your Email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password*</label>
                  <input type="password" id="password" placeholder="Enter Your Password" required />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <input type="password" id="confirmPassword" placeholder="Enter Your Confirm Password" required />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Sign in
              </button>
            </form>

            <div className="form-footer">
              <p>
                Already Have an Account?{" "}
                <Link to="/login" className="form-link">
                  Sign in Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signup
