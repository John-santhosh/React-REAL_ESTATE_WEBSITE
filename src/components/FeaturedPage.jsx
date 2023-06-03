import styled from "styled-components";
import { FeaturedTypes } from "../data";

const FeaturedPage = () => {
  return (
    <Wrapper className="text-center mt-5 py-5">
      <h2 className="fw-bold font-monospace">Featured Property Types</h2>
      <p>Find All Type of Property.</p>
      <div className="d-flex flex-wrap justify-content-center gap-4 my-5">
        {FeaturedTypes.map(({ id, img, title, desc }) => {
          return (
            <div
              className="card col-6 col-sm-4 col-lg-2  shadow  rounded-3 py-4 "
              key={id}
            >
              <img src={img} alt={title} />
              <h6 className="mt-2">{title}</h6>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
  }
  .card {
    transition: var(--transition);
    :hover {
      background-color: var(--clr-p-11);
      cursor: pointer;
      transform: scale(1.1);
    }
    img {
      width: 60px;
      margin: auto;
    }
  }
`;
export default FeaturedPage;
