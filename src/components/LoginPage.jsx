import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const LoginPage = ({ logo, login }) => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-lg-6 p-5 text-center d-grid justify-items-center bg-secondary bg-opacity-10">
        <img src={logo} alt="logo" className="col-lg-3 col-5" />

        <img src={login} alt="" className="col-6 my-4 " />
        <p className="px-5 ">
          Find the best matches for you Make the most of high seller scores
          Experience a joyful journey
        </p>
      </div>

      <div className="col-lg-6  p-5 text-center">
        <p>Connect with</p>
        <div className="fs-1 mb-4">
          <FcGoogle role="button" className="me-4" />
          <AiFillFacebook role="button" />
        </div>

        <div className="hr-txt ">or</div>

        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
          <button className="btn btn-page rounded-5 px-5">
            Login with Email
          </button>
          <button className="btn rounded-5 px-4 btn-page-hov">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
