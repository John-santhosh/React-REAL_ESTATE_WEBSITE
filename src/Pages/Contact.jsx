import styled from "styled-components";
import PageHero from "../components/PageHero";
import { agents } from "../data";
import { FloatingLabel, Form } from "react-bootstrap";

const Contact = () => {
  const iframe = `<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98711.72263506993!2d80.26363505714647!3d13.065540766746722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1685865310199!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>`;

  return (
    <Wrapper>
      <PageHero page="" details="Contact US" />

      <div className="section-center">
        <div className="d-flex flex-wrap align-items-lg-start justify-content-center py-5 my-5">
          <div className="col-lg-6 p-3  text-secondary">
            <h2 className="fw-bolder">
              We are here for help you! To find The Right Place
            </h2>
            <p className="my-4">
              At skyReal, we are dedicated to helping you Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Qui eos expedita, laborum
              ducimus repellat incidunt aspernatur? Reiciendis tenetur modi
              dolores quis, ipsum, harum unde recusandae aperiam eligendi veniam
              ab nemo.
            </p>
            <div className="d-flex flex-wrap flex-wrap">
              <div className="col-md-6 col-10 p-4">
                <div>
                  <h4>TamilNadu, India</h4>
                  <div className="underline mb-3"></div>
                  <p>85 Parker Avenue Mint Street,</p>

                  <p>Chennai East, TamilNadu </p>
                </div>
              </div>
              <div className="col-md-6  col-10  p-4">
                <div>
                  <h4>Opening Hours</h4>
                  <div className="underline mb-3"></div>
                  <p>Mon to Fri: 8:30 am — 5:00 pm</p>

                  <p>Sat & Sun: 9:30 am — 3:0 0 pm</p>
                </div>
              </div>
              <div className="col-md-6 col-10  p-4">
                <div>
                  <h4>Information</h4>
                  <div className="underline mb-3"></div>
                  <p>044-44433377</p>
                  <p>skyReal@ygmail.com</p>
                </div>
              </div>
              <div className="col-md-6 col-10  p-4">
                <h4>Follow Us On</h4>
                <div className="underline mb-3"></div>
                <div className="d-flex gap-3">
                  {agents[0].socials.map((Item, ind) => {
                    return (
                      <span
                        role="button"
                        key={ind}
                        className="bg-secondary-subtle px-2 py-1 rounded-5"
                      >
                        <Item />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="col-lg-6 col-10  p-md-4">
            <div className=" p-4 bg-secondary-subtle rounded-3 ">
              <h2>Leave Us Your Info</h2>
              <div className="underline mb-4"></div>
              <FloatingLabel
                controlId="floatingInput"
                label="Full Name*"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Full Name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="text-center mt-5">
                <button className="btn btn-page rounded-5 px-5 ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Iframe iframe={iframe} />
    </Wrapper>
  );
};
const Wrapper = styled.section``;

function Iframe({ iframe }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: iframe ? iframe : "",
      }}
    />
  );
}
export default Contact;
