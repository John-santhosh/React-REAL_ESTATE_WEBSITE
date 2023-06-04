import styled from "styled-components";
import { FaHeart, FaSearch } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";
import FeaturedPage from "../components/FeaturedPage";
import { awards, locations, products } from "../data";
import AgentsPage from "../components/AgentsPage";
const Home = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <div className="section-center d-grid text-center pt-5 align-content-center align-items-start ">
          <h2 className="pt-5 m-auto">Search your Next Home</h2>
          <p className="mt-3">
            Find new & featured property located in your local city.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="container-fluid d-lg-flex bg-white text-start rounded-3 align-items-center my-5"
          >
            <div className="col-lg-3 p-2  border-lg-end  mb-3 ">
              <label className="mb-2" htmlFor="">
                City/Street
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-3 p-2  border-lg-end  mb-3 ">
              <label className="mb-2" htmlFor="">
                City/Street
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-3 p-2  border-lg-end  mb-3 ">
              <label className="mb-2" htmlFor="">
                City/Street
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-3 p-2 d-flex justify-content-between">
              <span className="mb-2 w-25">Advanced filter</span>
              <button className="btn btn-page px-4">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Featured products */}
      <section className="section-center">
        <FeaturedPage></FeaturedPage>
      </section>
      {/* new products */}
      <section className="section-center">
        <h2 className=" text-center">Recent Property Listed</h2>
        <p className=" text-center m-auto w-lg-50 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="cards d-flex flex-wrap ">
          {products.map(({ id, img, title, category, rent, desc, price }) => {
            return (
              <div
                key={id}
                className="col-12 col-sm-10 col-xl-4 col-lg-6 m-auto p-1 p-md-4"
              >
                <div className="border">
                  <img src={img} alt="" />
                  <div className="px-4 mt-4 pb-4">
                    <div className="d-flex justify-content-between mb-4">
                      {rent ? (
                        <span className="text-success bg-success bg-opacity-25 px-3 py-1 rounded-2">
                          For Rent
                        </span>
                      ) : (
                        <span className="text-danger bg-danger bg-opacity-10 px-3 py-1 rounded-2">
                          For Sale
                        </span>
                      )}
                      <span>
                        <FaHeart className="fs-4 text-danger" />
                      </span>
                    </div>

                    <h5 className="">{title}</h5>
                    <div className="d-flex align-items-center">
                      <MdOutlineMyLocation className="me-2" />
                      <p>{desc}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between py-3">
                      <button>
                        <span className="p-3 px-4 rounded-5 bg-danger text-white">
                          ₹{price}
                        </span>{" "}
                        /sqft
                      </button>
                      <span>{category}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* awards section */}
      <section className="  py-5 text-center awards my-5">
        <div className="section-center py-5">
          <p>Our Awards</p>
          <h3 className="mb-5">
            Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
          </h3>
          <div className=" cards d-flex text-center flex-wrap justify-content-center">
            {awards.map(({ id, Icon, title, award }) => {
              return (
                <div key={id} className="col-6 col-lg-3 ">
                  <div className="award d-flex align-items-center justify-content-center">
                    <Icon className="text-white " />
                  </div>
                  <h2 className="title mt-3">{title}</h2>
                  <p>{award}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Explore */}
      <section className="section-center text-center pt-5">
        <h2 className="">Explore By Location</h2>
        <p className="w-lg-50 m-auto mb-5 lh-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="cards d-flex flex-wrap mb-5">
          {locations.map(({ id, img, title }) => {
            return (
              <div
                key={id}
                className="col-12 col-sm-8 col-xl-4 col-lg-6 m-auto p-4"
              >
                <div className="border position-relative location">
                  <img src={img} alt="" style={{ height: "200px" }} />
                  <div className="position-absolute d-grid align-items-center align-content-center justify-content-center">
                    <h5 className="text-white">{title}</h5>
                    <p>
                      <span>12 Villas</span>
                      <span>07 Offices</span>
                      <span>10 Apartments</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* agents */}
      <AgentsPage />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .w-lg-50 {
    max-width: 700px;
  }
  .location {
    > div {
      height: 100%;
      width: 100%;
      background-color: #6767675c;
      transition: var(--transition);
      top: 1rem;
      left: 1rem;
      :hover {
        background-color: transparent !important;
        top: 0;
        left: 0;
        p {
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
  h3 {
    max-width: 600px;
    margin: auto;
  }
  .awards {
    background-color: var(--clr-p-11);
  }
  .cards {
    .award {
      background-color: var(--clr-p-6);
      width: 75px;
      height: 75px;
      border-radius: 5px 50% 5px 50%;
      margin: auto;
      svg {
        font-size: 2.5rem;
      }
    }
    .title {
      font-weight: 900;
      font-size: 3rem;
    }
  }
  p {
    color: var(--clr-s-5);
  }
  .img-container {
    background: url("https://funny-daffodil-350bc9.netlify.app/static/media/banner.1a3c8a0a448e8e24f6a0.png")
      bottom/cover no-repeat;
    min-height: 100vh;
    h2 {
      color: #fff;
      font-weight: 700;
      font-size: 3rem;
      word-spacing: 6px;
    }
  }
`;

export default Home;
