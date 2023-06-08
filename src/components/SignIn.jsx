import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { auth } from "../config/Config";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/Context";

const SignIn = ({ setShowLoginPage, setModalShow }) => {
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const { createUser } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);

  const loginSubmit = (e) => {
    e.preventDefault();
    const Email = email.current.value;
    const Passwd = password.current.value;

    signInWithEmailAndPassword(auth, Email, Passwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.displayName;
        // console.log(userCredential);
        // ...
        toast.success("Login Success");
        setModalShow(false);
        createUser(user);
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.code.slice(5));
      });
  };

  return (
    <div className="App text-start">
      <HiOutlineArrowLongLeft
        className="position-absolute end-0 fs-2 me-2 mt-2"
        role="button"
        onClick={() => {
          setShowLoginPage(false);
        }}
      />
      <h2 className="text-center my-3">user Login</h2>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 px-4 px-md-5">
            <form onSubmit={loginSubmit}>
              <div className="form-group mb-3 mt-2">
                <label className="my-2">Email address*</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  // onChange={(event) => setEmail(event.target.value)}
                  ref={email}
                />
              </div>

              <div className="form-group my-3">
                <label className="my-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  required
                  placeholder="Password"
                  // onChange={(event) => setPassword(event.target.value)}
                  ref={password}
                />
              </div>
              <div className="form-group form-check mb-3 d-flex align-items-center justify-content-between ">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label className="form-check-label">Show password</label>
                </div>
                <button type="submit" className="btn btn-page rounded-5 px-4">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
