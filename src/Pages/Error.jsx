import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/not-found.svg";
const Error = () => {
  return (
    <Wrapper className="section-center  d-flex justify-content-center align-items-center flex-wrap">
      <img src={icon} alt="" className="col-lg-6" />
      <div className="col-lg-6 text-center">
        <h2>That page don&#39;t exist</h2>
        <p className="my-3">404! Not found</p>
        <button className="btn btn-solid">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
`;
export default Error;
