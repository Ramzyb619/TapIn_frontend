import React from 'react';
import EventsPage from './Components/EventsPage.js';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
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


const history = createBrowserHistory()


function App() {
    return (
      <Router history={history}>
        <Container fluid>
          <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">Tap In!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/this-weekend">This Weekend</Nav.Link>
                <Nav.Link href="/music">Muisc</Nav.Link>
                <Nav.Link href="/charity-causes">Charity And Causes</Nav.Link>
                <Nav.Link href="/food">Food and Drink</Nav.Link>
                <Nav.Link href="/my-events">My Events</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>






  
  
              </Nav>
  
            </Navbar.Collapse>
          </Navbar>
          <Container>
            <Switch>
              <Route path="/my-events"> <MyEvents/> </Route>
              <Route path="/charity-causes"> <CharityCauses/> </Route>
              <Route path="/signup"> <SignUp history={history} /> </Route>
              <Route path="/login"> <LogIn /> </Route>
              <Route path="/this-weekend"> <ThisWeekend/> </Route>
              <Route path="/music"> <Music/> </Route>
              <Route path="/food"> <Food/> </Route>
              <Route path="/profile"> <Profile/> </Route>
              <Route path="/"> <EventsPage/> </Route>






  
            </Switch>
          </Container>
  
        </Container>
      </Router>
    );
    
    }

export default App;
