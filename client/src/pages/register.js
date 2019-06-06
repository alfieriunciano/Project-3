import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
// import { Link } from 'react-router-dom';
import RandomHomeComponent from '../components/RandomHomeComponent';

class Home extends Component {
  state = {
    userId : '',
    email: '',
    password: '',
    confirm: '',
    redirect: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  register = (evt) => {
    evt.preventDefault();
    if(this.state.password !== this.state.confirm){
      alert("Passwords don't match");
      return;
    }
    API.register({
      userId : this.state.userId,
      email : this.state.email,
      password: this.state.password
    })
    .then((res) => {
      console.log(res)
      console.log(res.data)
      this.props.updateUser(res.data);
      this.setState({
        redirect: true
      })
    })
    .catch((err =>
      console.log(err)))
  }

  render() {
    if(this.state.redirect){
      return <Redirect to="/chat" />
    }else{
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

<main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Register Now!</div>
                    <div class="card-body">
                        <form action="" method="">
                            <div class="form-group row">
                                <label for="User_ID" class="col-md-4 col-form-label text-md-right">User ID</label>
                                <div class="col-md-6">
                                    <input type="text" id="user-id" class="form-control" name="userId" required autofocus value={this.state.userId} onChange={this.onChange}/>
                                    
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">Email Address</label>
                                <div class="col-md-6">
                                    <input type="text" id="email_address" class="form-control" name="email" required autofocus value={this.state.email} onChange={this.onChange}/>
                                    
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="password" required value={this.state.password} onChange={this.onChange}/> 
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="confirm_password" class="form-control" name="confirm" required value={this.state.confirm} onChange={this.onChange}/> 
                                </div>
                            </div>

                           

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary" onClick={this.register}>
                                    Register
                                </button>
                               
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

</main>

</>






    );
    }
  }
}

export default Home;
