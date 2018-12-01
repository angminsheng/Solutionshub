import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Repospage from './pages/ReposPage';
import Pullspage from './pages/PullsPage';
import api from '../api';
import Navbar from './Navbar'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <Navbar /> 

   
        {/* <NavBar/> */}
        <Switch>
    
          <Route path="/repos" exact component={Repospage} />
          <Route path="/pulls/:name" exact component={Pullspage} />

          
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;




        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MERN Boilerplate</h1>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Add country</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          <NavLink to="/secret">Secret</NavLink>
        </header> */}