import React, { Component } from 'react';
import "./chat.css";

import API from '../utils/API';
// import { Link } from 'react-router-dom';
import Message from '../components/message';

class Home extends Component {
  state = {
    posts: [],
    user: "John",
    text : ""
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

    window.location.href = "/chat";
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

    newMessage = (event) => {
      //Send the message to the DB
      event.preventDefault();
      let newPost = {user: this.state.user, text: this.state.text};
      API.createPost(newPost)
      .then(() => {
        this.setState({
          text: "",
          posts: [
            ...this.state.posts,
            newPost
          ]
        })
      })
    }

    updateText = (event) => {
      this.setState({
        text: event.target.value
      });
    }

    getMessages = () => {
      API.getPosts()
      .then(res =>
        this.setState({ posts: res.data })
      )
      .catch(err => console.log(err));
    }

    componentWillMount(){
      setInterval(this.getMessages, 1000);
    }

  render() {
    return (
      <div className="chat-wrapper">
<nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
    <div class="container home-container">
        <a class="navbar-brand" href="#">Chat Now</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about-us">About Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    <div class="container">
 
        <br />

	<div class="row">
                 <div class="col-sm-4">
                  <div class="card">
		    <div class="card-header bg-dark top-bar">
                    <div class="col-md-8 col-xs-8">
                        <h3 class="card-title"><span class="glyphicon glyphicon-book"></span> Contacts</h3>
                        
                    </div>
                </div>
		    <table class="table table-striped table-hover">
		        <tbody>
		            <tr>
		                <td>1</td>
		                <td>John</td>
		            </tr>
		            <tr>
		                <td>2</td>
		                <td>Jonathan</td>
		            </tr>
		            <tr>
		                <td>3</td>
		                <td>Kevin</td>
		            </tr>
		        </tbody>
		    </table>
		</div>
                 </div>
                 
                 
                 
                 <div class="col-sm-8">
                  <div class="chatbody">
                  <div class="card">
                <div class="card-header bg-dark top-bar">
                    <div class="col-md-12 col-xs-12">
                        <h3 class="card-title float-left"><span class="glyphicon glyphicon-comment"></span>Messages</h3>
                        <i className="fa fa-edit float-right" style={{"fontSize" : "32px"}}></i>
                    </div>
                </div>
                <div class="card-body msg_container_base">
                    {this.state.posts.map((post) => {
                      return(
                        <Message text={post.text} user={post.user} time={post.createdAt} />
                      )
                    })}
                </div>
                <div class="card-footer">
                    <form class="input-group" onSubmit={this.newMessage}>
                        <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." value={this.state.text} onChange={this.updateText} />
                        <span class="input-group-btn">
                        <button class="btn btn-primary btn-" id="btn-chat" onClick={this.newMessage} type="submit"><i class="fa fa-send fa-1x" aria-hidden="true"></i></button>
                        </span>
                    </form>
                </div>
    		</div>

                 </div>
             </div>
</div> 
</div>
</div>
)}
    }


export default Home;
