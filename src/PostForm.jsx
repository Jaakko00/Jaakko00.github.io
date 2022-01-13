import React, { useState } from "react";
import {
  Button,
  Form,
  Offcanvas,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
require("dotenv").config();

var filter = require("leo-profanity");

function PostForm(props) {
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState("");

  /**
   * randomColor randomly chooses out of 4 bootstrap colors, and if admin is logged in, chooses "dark"
   * @returns {string} color
   */
  function randomColor() {
    var randomnumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    if(props.showDeleteButton() === "visible") {
      return "dark";
    } else {
      if (randomnumber === 1) {
        return "success";
      }
      if (randomnumber === 2) {
        return "danger";
      }
      if (randomnumber === 3) {
        return "warning";
      } else {
        return "info";
      }

    }
  }

  /** onChangeContent sets the state of content with given value */
  const onChangeContent = (e) => {
    setContent(e.currentTarget.value);
  };

  /** onChangeSender sets the state of content with given value */
  const onChangeSender = (e) => {
    setSender(e.currentTarget.value);
  };

  /** onChangeTitle sets the state of content with given value */
  const onChangeTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  /** onChangePassword sets the state of password with given value */
  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand className="display-1">Bullet-in-Board</Navbar.Brand>

          {/*This form has a password field and a submit button to log in as an admin user*/}
          <Form className="d-flex" style={{ width: "20rem" }}>
            <Nav.Link disabled>Admin</Nav.Link>
            <Form.Control
              className="me-2"
              type="password"
              value={password} //Value of the form is its current state
              placeholder="Password"
              onChange={onChangePassword} //By changing the value of the form, it gets updated to the state
              disabled={disabled} //The password form is disabled when you are logged in
            />
            <Button
              onClick={() => {
                /*
                If the password is correct or you are already logged in,
                the delete buttons style toggles, and the password form gets emptied and enabled

                if the password is correct and you are not logged in, the password form gets enabled
                */
                if (
                  password === "Admin2110" ||
                  props.showDeleteButton() === "visible"
                ) {
                  props.showDelete();
                  setPassword("");
                  setDisabled(false);
                }
                if (
                  password === "Admin2110" &&
                  props.showDeleteButton() === "invisible"
                ) {
                  setDisabled(true);
                }
              }}
            >
              {props.showDeleteButton() === "invisible" && "Login"}
              {props.showDeleteButton() === "visible" && "Logout"}
            </Button>
          </Form>

          <Navbar.Toggle>New post</Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ width: "35rem" }}
            scroll={true}
            backdrop={false}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                New post
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="m-2" style={{ width: "10rem" }}>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Title"
                  value={title} //Value of the form is its current state
                  onChange={onChangeTitle} //By changing the value of the form, it gets updated to the state
                />
              </Form>

              <Form className="m-2" style={{ width: "30rem" }}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Text"
                  value={content} //Value of the form is its current state
                  onChange={onChangeContent} //By changing the value of the form, it gets updated to the state
                />
              </Form>

              <Form className="m-2" style={{ width: "10rem" }}>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="From"
                  value={sender} //Value of the form is its current state
                  onChange={onChangeSender} //By changing the value of the form, it gets updated to the state
                />
              </Form>

              <Button
                className="m-2"
                variant="primary"
                type="submit"
                onClick={() => {
                  //onClick uses props.post method with all the given information, to send the post to the API
                  if (content.length && title.length) {
                    props
                      .post(
                        //filter.clean filters all profanity of a given string
                        filter.clean(content),
                        filter.clean(sender),
                        filter.clean(title),
                        randomColor()
                      )
                      //After posting, the state is emptied to avoid doubleposting
                      .then(setContent(""))
                      .then(setSender(""))
                      .then(setTitle(""));
                  }
                }}
              >
                Submit
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default PostForm;
