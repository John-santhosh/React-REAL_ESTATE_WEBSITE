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
  const [modalShow, setModalShow] = useState(false);
  const {
    current_user,
    userLogged,
    signout,
    addUserDetails,
    current_userDetails,
  } = useGlobalContext();
  // console.log(current_userDetails);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    id: 0,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        readData(uid);
      }
    });
  }, [current_user]);

  const readData = async (id) => {
    const docRef = doc(db, id, "details");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      addUserDetails({ ...docSnap.data(), id: id });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const signoutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      toast.success("Successfully Logged out");
      navigate("/");
    });
    signout();
  };
  return (
    <Wrapper className="section-center text-center my-5">
      {userLogged ? (
        <div className="">
          <div>
            <img
              src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="icon"
              className="col-2 mb-3"
              style={{ borderRadius: "50%", aspectRatio: "1/1" }}
            />
          </div>
          <h2 className="">{current_userDetails.name}</h2>
          <h4 className="text-info my-3">{current_userDetails.email}</h4>
          <p className="text-secondary fs-4">
            <ImLocation2 className="fs-4" />{" "}
            {current_userDetails.address || "Address Here"}
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
              setdetails={details}
              show={modalShow}
              readdata={readData}
              onHide={() => setModalShow(false)}
            />
            <button className="btn btn-page" onClick={signoutUser}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
        </div>
      )}
    </Wrapper>
  );
};

function MyVerticallyCenteredModal(props) {
  const { current_userDetails } = useGlobalContext();
  const [userDetails, setUserDetails] = useState(current_userDetails);

  useEffect(() => {
    setUserDetails(current_userDetails);
  }, [current_userDetails]);

  // console.log(userDetails);
  const editDetails = async (id, name, address) => {
    // console.log(address);
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

    await updateDoc(doc(db, id, "details"), {
      address: address,
      name: name,
    }).then(() => {
      toast.success("Updated");
      props.readdata(id);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editDetails(
      userDetails.id,
      userDetails.name,

      userDetails.address
    );
  };
  // console.log(userDetails);
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
              disabled
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
