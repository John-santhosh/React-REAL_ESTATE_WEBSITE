import { useEffect, useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { BiMessageSquareEdit } from "react-icons/bi";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../config/Config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/Context";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const MyProfile = () => {
  const navigate = useNavigate();
  const { current_user, userLogged, signout } = useGlobalContext();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    id: 0,
  });
  const [modalShow, setModalShow] = useState(false);

  const readData = async (id) => {
    const docRef = doc(db, id, "details");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      setDetails({ ...details, ...docSnap.data() });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(user);
        setDetails({
          ...details,
          name: user.displayName,
          email: user.email,
          id: uid,
        });
        console.log(uid);
        readData(details.id);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [current_user]);

  const signoutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log();
      toast.success("Successfully Logged out");
      setDetails({ name: "", email: "", address: "" });
      navigate("/");
    });
    signout();
  };
  return (
    <Wrapper className="section-center text-center my-5">
      {userLogged ? (
        <>
          <div>
            <img
              src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="icon"
              className="col-2 mb-3"
              style={{ borderRadius: "50%", aspectRatio: "1/1" }}
            />
          </div>
          <h2>{details.name}</h2>
          <h4 className="text-info">{details.email}</h4>
          <p className="text-secondary fs-4">
            <ImLocation2 className="fs-4" /> {details.address || "Address Here"}
          </p>
          <div className="my-4">
            <button
              className="btn py-1 me-5 "
              onClick={() => setModalShow(true)}
            >
              Edit Info
              <BiMessageSquareEdit className="fs-1 ms-3" />
            </button>
            <MyVerticallyCenteredModal
              details={details}
              setdetails={details}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <button className="btn btn-page" onClick={signoutUser}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2>Please Login</h2>
        </div>
      )}
    </Wrapper>
  );
};

function MyVerticallyCenteredModal(props) {
  const { details } = props;
  const [userDetails, setUserDetails] = useState({ ...details });
  const editDetails = async (id, name, email, address) => {
    console.log(id);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });

    updateEmail(auth.currentUser, email).then(() => {
      // Email updated!
      // ...
    });
    await updateDoc(doc(db, id, "details"), {
      address: address,
      name: name,
      email: email,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editDetails(
      details.id,
      userDetails.name,
      userDetails.email,
      userDetails.address
    );
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit info</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-md-4">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              className="form-control"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Address:</label>
            <input
              type="text"
              className="form-control"
              value={userDetails.address}
              onChange={(e) =>
                setUserDetails({ ...userDetails, address: e.target.value })
              }
            />
          </div>
          <button className="btn btn-page py-1 rounded-5 px-4 mt-4">
            Save Changes
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
const Wrapper = styled.div`
  min-height: 30vh;
`;
export default MyProfile;
