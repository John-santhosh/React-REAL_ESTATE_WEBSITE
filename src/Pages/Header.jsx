import { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../data";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/skyreal.svg";
import login from "../assets/images/login.png";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import NavLinks from "../components/NavLinks";
import LoginPage from "../components/LoginPage";
import { auth } from "../config/Config";
import { onAuthStateChanged } from "firebase/auth";
import { useGlobalContext } from "../context/Context";
const Header = () => {
  const { userLogged, createUser } = useGlobalContext();
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [userLogged, setUserLogged] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // console.log(user);
        createUser(user.displayName);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth]);
  return (
    <Wrapper className="py-3">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
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
              <NavLinks handleClose={handleClose} setModalShow={setModalShow} />
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
        {userLogged ? (
          <Link to="/myprofile">
            <div className="login btn btn-solid  d-md-block d-none">
              My Account
            </div>
          </Link>
        ) : (
          <div
            onClick={() => {
              handleClose();
              setModalShow(true);
            }}
            className="login btn btn-solid  d-md-block d-none"
          >
            <FaRegUserCircle className="me-3" />
            Login
          </div>
        )}
      </div>
    </Wrapper>
  );
};

// modal
function MyVerticallyCenteredModal(props) {
  const { setModalShow } = props;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="p-0">
        <LoginPage setModalShow={setModalShow} logo={logo} login={login} />
      </Modal.Body>
    </Modal>
  );
}
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
    }
  }
  ol {
    list-style: none;
  }
`;

export default Header;
