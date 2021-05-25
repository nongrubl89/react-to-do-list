import React, { useContext } from "react";
import "../App.css";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../services/context";
import { Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function InitialSignIn() {
  //get the user state from the context
  const { user } = useContext(AuthContext);

  //this is our config for FirebaseAuth
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  //if user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
  return (
    <div>
      {!!user ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
}
