import React from 'react';
import EventsPage from './Components/EventsPage.js';
import { Container, Col, Row, Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import SignUp from './Components/SignUp.js';
import LogIn from './Components/LogIn';
import CharityCauses from './Components/CharityCauses'
import Food from './Components/Food';
import Music from './Components/Music';
import Profile from './Components/Profile';
import ThisWeekend from './Components/ThisWeekend';
import useHistory from 'react-router-dom';
import MyEvents from './Components/MyEvents';
import Show from './Components/Show';
import SearchBar from './Components/SearchBar';
import Pic from './Img/Pic.png';
import AddEvent from './Components/AddEvent'


const history = createBrowserHistory()

class App extends React.Component {
  state = {
    searchResults: []
  }

  searchCallback = (results) => {
    this.setState(
      { searchResults: results }
    )
    console.log(results)
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/"><img className ="logo" src={Pic} width="120"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/music">Music</Nav.Link>
                <Nav.Link href="/charity-causes">Charity And Causes</Nav.Link>
                <Nav.Link href="/food">Food and Drink</Nav.Link>
                <Nav.Link href="/this-weekend">This Weekend</Nav.Link>
                <Nav.Link href="/my-events">My Events</Nav.Link>
              </Nav>
              <Nav.Link href="/create-event"> 
              <Button> Host an Event </Button>
              </Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Menu">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
              </NavDropdown>

              <SearchBar searchCallback={this.searchCallback} />

            </Navbar.Collapse>
          </Navbar>
          <Container>
            <Switch>
              
              <Route path="/create-event"> <AddEvent/> </Route> 
              <Route path="/show/:id" component={Show} />
              <Route path="/my-events"> <MyEvents /> </Route>
              <Route path="/charity-causes"> <CharityCauses /> </Route>
              <Route path="/signup"> <SignUp history={history} /> </Route>
              <Route path="/login"> <LogIn /> </Route>
              <Route path="/this-weekend"> <ThisWeekend /> </Route>
              <Route path="/music"> <Music /> </Route>
              <Route path="/food"> <Food /> </Route>
              <Route path="/profile"> <Profile /> </Route>
              <Route path="/"> <EventsPage searchResults={this.state.searchResults} /> </Route>







            </Switch>
          </Container>

        </div>
      </Router>
    );
  }

}

export default App;
