import styled from "styled-components";
import PageHero from "../components/PageHero";
import { GiQueenCrown, GiTargetArrows } from "react-icons/gi";
const About = () => {
  return (
    <Wrapper>
      <PageHero page="About US" details="About Us - Who We Are?" />
      <div className="section-center my-5 text-center">
        <div className="d-flex flex-wrap">
          <div className="col-md-6 col-12 p-5 order-2 align-items-center d-grid justify-items-center">
            <GiTargetArrows />
            <h2 className="my-2">Our Agency Story</h2>
            <p>Check out our company story and work process</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img
            className="col-md-6 col-12 order-1 order-md-2"
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        {/*  */}
        <div className="d-flex flex-wrap">
          <img
            className="col-md-6 col-12"
            src="https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="col-md-6 col-12 p-5 align-items-center d-grid justify-items-center">
            <GiQueenCrown />
            <h2 className="my-2">Our History</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <button className="btn btn-page px-5 rounded-5 mt-5">
          More About us
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  svg {
    font-size: 5rem;
    color: var(--clr-p-7);
  }
`;
export default About;
