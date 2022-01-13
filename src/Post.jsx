import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/**
 * Post component contains a single posts features
 */
function Post(props) {


  return (
    <Card
      bg={props.post.color}
      text="white"
      className="m-2"
      style={{ width: "30rem" }}
    >
      <Card.Body>
        <Card.Title className="lead">{props.post.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-light">
          {props.post.create_time}
        </Card.Subtitle>
        <Card.Text className="text-white">{props.post.content}</Card.Text>
        <Card.Subtitle className="mb-2 text-light">
          {/*If the input of sender is empty, it outputs "-Anonymous" */}
          {props.post.sender && "-" + props.post.sender}
          {!props.post.sender && "-Anonymous"}
        </Card.Subtitle>
        <Button
          className={props.showDeleteButton()}
          variant="dark"
          color="white"
          onClick={() => props.delete(props.post)} //Calls the delete function from Posts.js
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
