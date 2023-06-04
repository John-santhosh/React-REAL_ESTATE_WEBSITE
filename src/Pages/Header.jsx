import { useState } from "react";
import styled from "styled-components";
import { navLinks } from "../data";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/skyreal.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import Offcanvas from "react-bootstrap/Offcanvas";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Wrapper className="py-3">
      <div className="section-center ">
        <div className="logo  ">
          <Link to="/" className="logo-img">
            <img src={logo} alt="logo" />
          </Link>

          <button onClick={handleShow} className=" d-md-none">
            <GiHamburgerMenu />
          </button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="side">
                {navLinks.map(({ id, url, text }) => {
                  return (
                    <p key={id} className="my-3" onClick={handleClose}>
                      <NavLink to={url}>{text}</NavLink>
                    </p>
                  );
                })}
                <div className="login btn btn-100 mt-3" onClick={handleClose}>
                  <FaRegUserCircle className="me-3" />
                  Login
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <ol className="p-0 m-0 gap-4 d-md-flex d-none">
          {navLinks.map(({ id, url, text }) => {
            return (
              <li key={id}>
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
        </ol>
        <div className="login btn btn-solid  d-md-block d-none">
          <FaRegUserCircle className="me-3" />
          Login
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  .logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    align-items: center;
    svg {
      font-size: 1.5rem;
      color: var(--clr-p-6);
    }
  }
  .logo-img {
    width: 150px;
    justify-self: start;
  }
  @media screen and (min-width: 768px) {
    > div {
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      gap: 1rem;
      height: 3.5rem;
      align-items: center;
      justify-items: center;
      > * {
        /* background-color: olive; */
      }
    }
  }
  ol {
    list-style: none;
  }
`;

export default Header;
