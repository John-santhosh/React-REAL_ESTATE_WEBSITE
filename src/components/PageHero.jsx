import styled from "styled-components";
const PageHero = ({ page, details }) => {
  return (
    <Wrapper>
      <div className="text-white ">
        <div className="section-center h-100 d-grid align-items-end pb-5">
          <span>
            <p className="fs-5">{page}</p>
            <h2 className="text-white fw-semi-bold fs-1">{details}</h2>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  > div {
    height: 45vh;
    background: url("https://images.pexels.com/photos/5727909/pexels-photo-5727909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center/cover no-repeat;
    background-color: #452a30d4;
    background-blend-mode: overlay;
  }
`;
export default PageHero;
