import React, { useContext } from "react";
import "../App.css";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../services/context";
import { ModalContext } from "../services/modalcontext";
import { Redirect, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function InitialSignIn() {
  //get the user state from the context
  const { user } = useContext(AuthContext);
  const [modalState, setModalState] = useContext(ModalContext);
  const history = useHistory();

  //this is our config for FirebaseAuth
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  const toggleModal = () => {
    setModalState(!modalState);
    history.push(`/`);
  };

  return (
    <div>
      {!!user ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <Modal show={modalState ? true : false}>
          <Modal.Header closeButton onClick={toggleModal}>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {!!user ? (
              <p>Welcome</p>
            ) : (
              <FirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
