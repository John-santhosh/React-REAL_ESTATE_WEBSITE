import styled from "styled-components";
import { agents } from "../data";
import { MdOutlineMyLocation } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";

const AgentsPage = () => {
  return (
    <Wrapper className="bg-body-secondary bg-opacity-75  text-center py-5">
      <h2 className="pt-5">Our Featured Agents</h2>
      <p className="w-lg-50 m-auto mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="section-center cards d-flex flex-wrap ">
        {agents.map(({ id, img, dec, listing, name, socials }) => {
          return (
            <div
              key={id}
              className="col-12 col-sm-10 col-xl-4 col-lg-6 m-auto p-4 "
            >
              <div className="border p-4 rounded-2">
                <div className="bg-danger bg-opacity-50 px-4 py-2 rounded-5 w-10 my-3 ">
                  <span>{listing} Listing</span>
                </div>

                <div className="img border border-5 d-inline-block p-2 mb-3">
                  <img className="" src={img} alt={name} />
                </div>
                <div>
                  <MdOutlineMyLocation />
                  <span>{name}</span>
                </div>
                <h6 className="my-2">{dec}</h6>
                <div className="connections d-flex justify-content-center gap-3 text-secondary fs-5 my-4">
                  {socials.map((Item, ind) => {
                    return (
                      <span
                        className="bg-secondary bg-opacity-25 rounded-5 p-1"
                        role="button"
                        key={ind}
                      >
                        <Item className="mx-1" />
                      </span>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between ">
                  <button className="btn btn-page px-3 px-md-5">
                    <TbMessages /> Message
                  </button>
                  <button className="btn btn-solid px-4">
                    <LuPhoneCall />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .img {
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 90px;
    }
  }
  .w-10 {
    width: 150px;
  }
`;
export default AgentsPage;
