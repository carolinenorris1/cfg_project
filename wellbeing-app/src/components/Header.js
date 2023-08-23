import React, { useContext, useState } from "react";
import "../css/globalStyles.css";
import CountryContext from "../context/CountryContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Header({ setSelectedPage }) {
  const context = useContext(CountryContext);
  const country = context.country;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    context.setCountry(event.target.country.value);
    handleClose();
  };

  return (

    <div className={"header-container"}>
      <div className={"logo"}>
        {/* <h1>LOGO</h1> */}
        <img src = "images\logo\logo2.png"></img>
        {/* place for the logo - image */}
      </div>


        <div className={"header-menu"}>
          <div></div>
          <button onClick={() => setSelectedPage("home")}>Home</button>
          <button onClick={() => setSelectedPage("wellnessApp")}>
            WellnessApp
          </button>
          <button onClick={() => setSelectedPage("wellbeing")}>
            Wellbeing
          </button>
          <button onClick={() => setSelectedPage("community")}>
            Community
          </button>
        </div>
        <div className={"user-icon-container"}>
          <img
            src="images\home-images\vectoruser-icon.png"
            className={"user-icon"}
          ></img>
        </div>

        <div className={"country-modal"}>
          <Button variant="primary" onClick={handleShow}>
            {country}
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Where in the world are you visiting us from?
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Select name="country">
                  <option value="UK">UK</option>
                  <option value="US">US</option>
                  <option value="EU">EU</option>
                </Form.Select>
              </Modal.Body>
              <Modal.Footer>
                Can't see your region listed? We hope to be available to you
                soon!
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
