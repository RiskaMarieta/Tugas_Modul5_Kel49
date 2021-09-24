import React, { useState } from "react";
import "./App.css";
import Detail from "./Component/Detail.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Daftar Valorant's Player</h2>
        <Detail />
        {
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Daftar Valorant's Player</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        }
      </header>
    </div>
  );
}
export default App;

