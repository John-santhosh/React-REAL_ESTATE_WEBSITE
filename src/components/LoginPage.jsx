import { FcGoogle } from "react-icons/fc";
import SignupPage from "./SignupPage";
import styled from "styled-components";
import { useState } from "react";
import SignIn from "./SignIn";

const LoginPage = ({ logo, login, setModalShow }) => {
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const showSignUpPage = () => {
    setShowSignupPage(true);
    setShowLoginPage(false);
  };
  const showloginPage = () => {
    setShowSignupPage(false);
    setShowLoginPage(true);
  };
  return (
    <Wrapper className="d-flex flex-wrap">
      <div className="col-lg-6 p-5 text-center d-grid justify-items-center bg-secondary bg-opacity-10">
        <img src={logo} alt="logo" className="col-lg-3 col-5" />

        <img src={login} alt="" className="col-6 my-4 " />
        <p className="px-5 ">
          Find the best matches for you Make the most of high seller scores
          Experience a joyful journey
        </p>
      </div>

      <div className="col-lg-6  p-5 text-center position-relative overflow-hidden ">
        <p>Connect with</p>
        <div className="fs-1 mb-4">
          <FcGoogle role="button" className="" />
          {/* <AiFillFacebook role="button" /> */}
        </div>

        <div className="hr-txt ">or</div>

        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 ">
          <button
            className="btn btn-page rounded-5 px-md-5 px-4"
            onClick={showloginPage}
          >
            Login with Email
          </button>
          <button
            className="btn rounded-5 px-md-4 btn-page-hov"
            onClick={showSignUpPage}
          >
            Create new account
          </button>
        </div>
        <div
          className={`position-absolute top-0 start-100 form   w-100 bg-white h-100 ${
            showSignupPage ? "show" : ""
          }`}
        >
          <SignupPage
            setShowSignupPage={setShowSignupPage}
            setShowLoginPage={setShowLoginPage}
          ></SignupPage>
        </div>
        <div
          className={`position-absolute top-0 start-100 form   w-100 bg-white h-100 ${
            showLoginPage ? "show" : ""
          }`}
        >
          <SignIn
            setModalShow={setModalShow}
            setShowLoginPage={setShowLoginPage}
          ></SignIn>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    transition: var(--transition);
  }
  .show {
    left: 0 !important;
  }
`;
export default LoginPage;
