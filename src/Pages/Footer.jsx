import styled from "styled-components";
import logo from "../assets/skyreal.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { navLinks } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className=" contacts">
        <div className=" section-center gap-4 flex-wrap d-flex justify-content-between py-4 py-md-5">
          <div className="">
            <h2>Do you have any questions ?</h2>
            <p>We&#39;ll help you to grow your career and growth.</p>
          </div>
          <Link to="/contact">
            <button className="btn rounded-5 px-5 py-4">
              Contact Us today
            </button>
          </Link>
        </div>
      </div>
      <div className="footer page-footer font-small blue pt-4 ">
        <div className="  text-md-left section-center">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-start px-md-5">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
              <h3 className="my-3">Do You Need Help With Anything?</h3>
              <p className="mb-3">
                Receive updates, hot deals, discounts sent straight in your
                inbox every month.
              </p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <Button className="btn-page border-0" id="button-addon2">
                  Subscribe
                </Button>
              </InputGroup>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Layouts</h5>
              <ul className="list-unstyled ">
                {navLinks.map(({ id, url, text }) => {
                  return (
                    <p key={id} className="my-3 links">
                      <Link to={url}>{text} Page</Link>
                    </p>
                  );
                })}
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">All Sections</h5>
              <ul className="list-unstyled">
                <li className="my-3">
                  <a href="#!">Headers</a>
                </li>
                <li className="my-3">
                  <a href="#!">Features</a>
                </li>
                <li className="my-3">
                  <a href="#!">Attractive</a>
                </li>
                <li className="my-3">
                  <a href="#!">Testimonials</a>
                </li>
                <li className="my-3">
                  <a href="#!">Videos</a>
                </li>
                <li className="my-3">
                  <a href="#!">Footers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-copyright text-center py-3">
          Privacy Policy | © {new Date().getFullYear()}
          <a href="#"> skyReal</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-p-9);
  .logo {
    width: 150px;
  }
  .contacts {
    background-color: var(--clr-p-10);
  }
  .footer {
    background-color: var(--clr-p-8);
    color: #fff;
  }
  .links,
  li {
    transition: var(--transition);
    :hover {
      padding-left: 0.5rem;
    }
  }
`;

export default Footer;
