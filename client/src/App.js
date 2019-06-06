import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/chat';
import Register from './pages/register';
import AboutUs from "./pages/aboutUs";
import NoMatch from './pages/NoMatch';
import { UserContext  } from './utils/context';

function App() {
  const { state , dispatch } = useContext(UserContext);

  const updateUser = user => {
    console.log(user);
    dispatch({ type: "setUser", value: user });
    console.log(state);
  }

  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" render={(props) => <Home updateUser={updateUser} />} />
            <Route exact path="/chat" render={(props) => <Chat user={state.currentUser} />} />
            <Route exact path="/register" render={(props) => <Register updateUser={updateUser} />} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route component={NoMatch} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
