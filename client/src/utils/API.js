import axios from 'axios';

export default {
  // Gets all posts
  getPosts: function(data) {
    return axios.get('/api/user', data);
  },
  createPost: function(data) {
    return axios.post('/api/user', data);
  },
  login: function(data) {
    return axios.post('/api/user/login', data);
  },
  register: function(data) {
    return axios.post('/api/user/register', data);
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
