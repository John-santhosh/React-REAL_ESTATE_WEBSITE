import styled from "styled-components";
import PageHero from "../components/PageHero";
import { blogs, tags } from "../data";
import { GrStackOverflow } from "react-icons/gr";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <PageHero page="Our Recent" details="Blog" />
      <Wrapper>
        <div className="section-center text-secondary d-flex flex-wrap">
          <div className="col-md-8 p-lg-5 p-3">
            {blogs.map(({ img, title, id }) => {
              return (
                <div key={id} className=" my-5 ">
                  <img src={img} alt="blog pic" />
                  <div className="my-3">
                    <GrStackOverflow className="text-danger  fs-5 me-2" /> By
                    <strong> Admin</strong> | March 11, 2023 | Real-Estate
                  </div>
                  <h2>{title}</h2>
                  <p className="mb-5">
                    Working as a real estate agent offers a great deal of
                    variety. From working with different clients and visiting
                    many homes, you won&#39;t be doing the same thing every day.
                    You get to be your own boss and enjoy the satisfaction of
                    helping buyers and sellers navigate through one of
                    life&#39;s major milestones.
                  </p>
                  <a href="#" className="btn btn-page px-5 rounded-0 ">
                    Read Now!
                  </a>
                </div>
              );
            })}
          </div>
          <div className="col-md-4 mt-5 pt-5 mb-5">
            {/* search bar */}
            <div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="basic-addon2"
                />
                <button
                  type="button"
                  className="btn bg-danger border-danger"
                  id="button-addon2"
                >
                  <FaSearch className="text-light" />
                </button>
              </InputGroup>
            </div>
            {/* recent post section */}
            <div>
              <h4>Recent Post</h4>
              <div className="underline"></div>
              <div className="mt-4 bg-opacity-10 bg-secondary px-4 py-2 rounded-2 ">
                {blogs.map(({ id, img, title }) => {
                  return (
                    <article
                      className="d-flex my-3 blog"
                      key={id}
                      role="button"
                    >
                      <img className="col-4" src={img} alt="" />
                      <div className="ms-3">
                        <p className="mb-2">March 22, 2023</p>
                        <h6>{title}</h6>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            {/* tags */}
            <div className="bg-secondary bg-opacity-10 p-4 my-4">
              <h4>popular tags</h4>
              <div className="underline"></div>
              <div className="d-flex flex-wrap mt-4">
                {tags.map((item, i) => {
                  return (
                    <span
                      className="bg-white tags px-2 m-1 text-capitalize"
                      key={i}
                    >
                      #{item}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* final img */}

            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1559966303-99414caa494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
              <div className="position-absolute top-0 text-white p-4">
                <h2 className=" overlay px-5  ">SkyReal</h2>
                <h2 className="text-white">23%</h2>
                <h6 className="text-white fw-bolder fs-6">Flat Discount</h6>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .overlay {
    position: relative;
    z-index: 0;
    color: #000;
    left: -3rem;
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      transform: skew(25deg, 0deg);
      position: absolute;
      left: 0;
      z-index: -1;
    }
    ~ h2 {
      font-size: 3rem;
      font-weight: 700;
    }
  }
  a {
    position: relative;
    border: 1px solid var(--clr-p-5);
    background-color: var(--clr-p-6);
    :hover {
      background-color: var(--clr-p-6);
      color: #fff;
      border: 1px solid var(--clr-p-5);
      ::after {
        top: 0;
        left: 0;
      }
    }

    ::after {
      content: "";
      transition: var(--transition);
      background-color: #75060626;
      width: 100%;
      height: 100%;
      position: absolute;
      border: 2px solid var(--clr-p-7);
      top: -13px;
      left: 13px;
      z-index: -1;
    }
  }
  .blog {
    :hover {
      h6 {
        color: var(--clr-p-7);
      }
    }
  }
  .tags {
    cursor: pointer;
    :hover {
      color: var(--clr-p-7);
    }
  }
`;

export default Blog;
