import { useState } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/Config";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/Context";

const SignupPage = ({ setShowSignupPage, setShowLoginPage }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const { signout } = useGlobalContext();
  const addData = async (id, name, email, address = "") => {
    await setDoc(doc(db, id, "details"), {
      name: name,
      email: email,
      address: address,
    });
  };
  const loginSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name || "User",
        });
        // console.log(userCredential.user);
        console.log();
        toast.success("Register success");
        setShowSignupPage(false);
        setShowLoginPage(true);
        setTimeout(() => {
          addData(user?.uid, user.displayName, user?.email);
          // console.log(user?.uid, user.displayName, user?.email);
        }, 2000);
        signOut(auth).then(() => {
          // Sign-out successful.
          signout();
        });
      })
      .catch((error) => {
        const err = error.code.slice(5);
        toast.error(err);
      });
    e.currentTarget.reset();
  };

  return (
    <div className="App text-start">
      <HiOutlineArrowLongLeft
        className="position-absolute end-0 fs-2 me-2 mt-2"
        role="button"
        onClick={() => {
          setShowSignupPage(false);
        }}
      />
      <div className="container">
        <div className="row ">
          <div className="col-md-12 px-4 px-md-5">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group mb-3 mt-2">
                <label className="my-2">Email address*</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              {/*  */}
              <div className="form-group my-3">
                <label className="my-2">FullName*</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter FullName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <label className="my-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  required
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group form-check mb-3 d-flex align-items-center justify-content-between ">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Show password
                  </label>
                </div>
                <button type="submit" className="btn btn-page rounded-5 px-4">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
