import "./App.css";
import React from "react";
import axios from "axios";
import Post from "./Post";
import PostForm from "./PostForm";
import { Row } from "react-bootstrap";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], showDelete: false };

    this.addNewPost = this.addNewPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
    this.handleShowDeleteButton = this.handleShowDeleteButton.bind(this);
  }

  async componentDidMount() {
    axios
      .get("https://bullet-in-board.herokuapp.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * addNewPost adds a new post to the database
   *
   * After randomly deciding for a color, it creates a newPost with all the given information, and then sends that to the database
   * @param {string} text
   * @param {string} sender
   * @param {string} title
   */
  async addNewPost(text, sender, title, color) {
    console.log("Adding post");

    let create_time = new Date().toISOString().slice(0, 10);
    let newPost = {
      content: text,
      create_time: create_time,
      sender: sender,
      title: title,
      color: color,
    };

    console.log(newPost);

    axios
      //makes a POST request with the newly created post
      .post("https://bullet-in-board.herokuapp.com/posts", newPost)
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        console.log("Added new post");
        axios
          //After adding post, makes a GET request for all the posts, and sets them to the state
          .get("https://bullet-in-board.herokuapp.com/posts")
          .then((response) => {
            this.setState({ posts: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /**
   * deletePost finds the id of the post given, and deletes it off the database and state
   * @param {object} post
   */
  async deletePost(post) {
    axios
      .delete(`https://bullet-in-board.herokuapp.com/posts/${post.id}`)
      .then((response) => {
        this.setState({
          posts: this.state.posts.filter(
            (postToStay) => postToStay.id !== post.id
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * handleShowDeleteButton() toggles the boolean state of showDelete
   */
  handleShowDeleteButton() {
    this.setState(({showDelete}) => ({ showDelete: !showDelete }));
  }


  /**
   * showDeleteButton() returns a React-Boostrap style prop of either "visible" or "invisible"
   */
  showDeleteButton() {
    if (this.state.showDelete) {
      return "visible";
    } else {
      return "invisible";
    }
  }

  render() {
    let sortedPosts = this.state.posts.sort((a, b) => b.id - a.id);
    let posts = sortedPosts.map((post) => (
      <Post
        key={post.id}
        post={post}
        delete={this.deletePost}
        showDeleteButton={this.showDeleteButton}
      ></Post>
    ));
    return (
      <>
        <PostForm
          post={this.addNewPost}
          showDelete={this.handleShowDeleteButton}
          showDeleteButton={this.showDeleteButton}
        ></PostForm>

        <Row className="justify-content-center">{posts}</Row>
      </>
    );
  }
}

export default Posts;
