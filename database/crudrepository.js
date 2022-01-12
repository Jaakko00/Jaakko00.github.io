const mysql = require("mysql");
const Validator = require("jsonschema").Validator;
const validator = new Validator();
require("dotenv").config();

/**
 * connection has inside all the variables of the connectionpool
 */
var connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

/**
 * connectionFunctions is a collection of database functions
 */
let connectionFunctions = {
  /**
   * connect establishes a connection to the database
   */
  connect: () => {
    return new Promise((resolve, reject) => {
      connection.connect((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  /**
   * close closes the database connection and then calls the callback function
   * @param {function} callback 
   */
  close: (callback) => {
    return new Promise((resolve, reject) => {
      connection.end((err) => {
        if (err) {
          reject(err);
        } else {
          resolve(callback);
        }
      });
    });
  },
  /**
   * findById finds an object from the database with the given id
   * @param {int} id 
   */
  findById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM posts WHERE id = ?", id, (err, post) => {
        if (err) {
          reject(err);
        } else {
          resolve(post);
        }
      });
    });
  },
  /**
   * deleteById finds and deletes an object from the database with the given id
   * @param {int} id 
   */
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM posts WHERE id = ?", id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve("One row deleted");
        }
      });
    });
  },
  /**
   * post inserts a new object into the database
   * @param {object} post 
   */
  save: (post) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO posts (content, create_time, sender, title, color) VALUES (?, ?, ?, ?, ?)",
        [post.content, post.create_time, post.sender, post.title, post.color],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve("One row added");
          }
        }
      );
    });
  },
  /**
   * findAll finds all entries in the database
   */
  findAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM posts", (err, posts) => {
        if (err) {
          reject(err);
        } else {
          resolve(posts);
        }
      });
    });
  },
};

module.exports = connectionFunctions;
