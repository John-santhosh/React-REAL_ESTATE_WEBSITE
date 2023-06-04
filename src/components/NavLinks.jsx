import { FaRegUserCircle } from "react-icons/fa";
import { navLinks } from "../data";
import { NavLink } from "react-router-dom";

const NavLinks = ({ handleClose, setModalShow }) => {
  return (
    <div className="side">
      {navLinks.map(({ id, url, text }) => {
        return (
          <p key={id} className="my-3" onClick={handleClose}>
            <NavLink to={url}>{text}</NavLink>
          </p>
        );
      })}
      <div
        className="btn btn-100 mt-3"
        onClick={() => {
          handleClose();
          setModalShow(true);
        }}
      >
        <FaRegUserCircle className="me-3" />
        Login
      </div>
    </div>
  );
};

export default NavLinks;
