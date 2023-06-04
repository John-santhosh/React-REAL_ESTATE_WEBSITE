import styled from "styled-components";
import PageHero from "../components/PageHero";
import img from "../assets/images/paid.gif";
import { FiArrowRight } from "react-icons/fi";
const Pricing = () => {
  return (
    <Wrapper>
      <PageHero
        page="Exclusive Paid Membership"
        details="No Extra Fees. Friendly Support"
      />

      <div>
        <div className="section-center d-flex my-5  flex-wrap">
          <div className="col-md-6 col-12 pe-5">
            <h2 className="fw-light">
              Sell or Rent your property for{" "}
              <strong className="fw-semibold">free on SkyReal</strong>!
            </h2>
            <h6 className="bg-danger-subtle d-inline-block px-4 py-1 rounded-2">
              Paid Membership available
            </h6>
            <p className="my-3 ">
              Become a part of the growing SkyReal family. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Obcaecati, expedita
              dignissimos? Doloremque beatae, alias voluptatibus esse sunt
              numquam cumque, quo praesentium pariatur placeat animi id ea
              quaerat corrupti qui dolores.
            </p>

            <button className="btn btn-page px-5 rounded-5 mt-3">
              List Your Property
            </button>
          </div>
          <img className="col-md-6 col-10 m-auto" src={img} alt="" />
        </div>

        {/*  */}

        <div className="d-flex flex-wrap section-center mb-5">
          {Array.from({ length: 3 }, (_, ind) => {
            return (
              <div
                key={ind}
                className="col-lg-4 col-md-8 col-12 m-auto p-md-4 p-2"
              >
                <div className="text-center rounded-3 overflow-hidden border box">
                  <div className="">
                    {(ind === 0 && (
                      <>
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661721669550-7e0f15a641b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNlbGxpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                          alt=""
                        />
                        <h2 className="py-3 bg-danger-subtle">basic</h2>
                      </>
                    )) ||
                      (ind === 1 && (
                        <>
                          <img
                            src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                          />
                          <h2 className="py-3 bg-danger-subtle">pro</h2>
                        </>
                      )) ||
                      (ind === 2 && (
                        <>
                          <img
                            src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                          />
                          <h2 className="py-3 bg-danger-subtle">ultimate</h2>
                        </>
                      ))}

                    <h2 className="fs-5 text-secondary">
                      ₹ <span className="text-black fw-bolder"> 50</span> p/m
                    </h2>

                    <ol className="list-style-none text-start">
                      <li>Early updated</li>
                      <li>Access to Premium base</li>
                      <li>Unlimited Listings</li>
                      <li>24/7 support</li>
                      <li>Free suggestions</li>
                    </ol>

                    <button className="px-5 bg-success rounded-5 py-3 text-light my-4">
                      purchase Now <FiArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    object-fit: contain;
  }
  ol {
    list-style: none;
  }
  li {
    margin: 1rem 0;
  }
  .box {
    transition: var(--transition);
    :hover {
      transform: scale(1.04);
    }
  }
  .fw-bolder {
    font-size: 3rem;
  }
`;

export default Pricing;
