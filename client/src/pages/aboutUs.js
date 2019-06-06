import React, { Component } from 'react';

import API from '../utils/API';
// import { Link } from 'react-router-dom';
import RandomHomeComponent from '../components/RandomHomeComponent';

class Home extends Component {
  state = {
    posts: [],
    title: '',
    body: '',
    category: '',
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: '', author: '', synopsis: '' })
      )
      .catch(err => console.log(err));
  };

  register = (event) =>{
    event.preventDefault();


    //API Class for Registration

    window.location.href = "/home";
  } 

  onChange = key => e => this.setState({ [key]: e.target.value });
//style={{textTransform: "none",fontWeight: "normal"}} 
  onClick = () =>
    API.createPost({
      title: this.state.title,
      body: this.state.body,
      category: this.state.category,
    }).then(() =>
      this.setState({
        posts: [
          ...this.state.posts,
          {
            title: this.state.title,
            body: this.state.body,
            category: this.state.category,
          },
        ],
      })
    );
  render() {
    return (
      
      <>
<nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
    <div class="container">
        <a class="navbar-brand" href="/">Chat Now</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Log In</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about-us">About Us</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
</>







    );
  }
}

export default Home;
