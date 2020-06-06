import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Profile extends React.Component {
  state = {
    user: ""
  }

  componentDidMount() {
    let userId = localStorage.getItem("user_id");
    fetch(`http://localhost:3000/users/${userId}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        user: data
      }))
  }


  render() {
    return (
      <div>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" src={this.state.user.img_url} />
          <Card.Body >
            <Card.Title  >{this.state.user.name}</Card.Title>
            <Card.Text>
              <Row className="justify-content-md-center">
                Email: {this.state.user.email}
              </Row>
              <Row className="justify-content-md-center">
                Phone Number: {this.state.user.phone_number}
              </Row>
              <Row className="justify-content-md-center">
                Age: {this.state.user.age}
              </Row>
              <Row className="justify-content-md-center">
                Bio: {this.state.user.bio}
              </Row>

            </Card.Text>
          </Card.Body>
        </Card>


        {/* <Row className="justify-content-md-center" >
          <Col xs="4"> <img src={this.state.user.img_url} ></img> </Col>
        </Row>
        <Row className="justify-content-md-center">
          Name: {this.state.user.name}
        </Row>
        <Row className="justify-content-md-center">
          Email: {this.state.user.email}
        </Row>
        <Row className="justify-content-md-center">
          Phone Number: {this.state.user.phone_number}
        </Row>
        <Row className="justify-content-md-center">
          Age: {this.state.user.age}
        </Row>
        <Row className="justify-content-md-center">
          Bio: {this.state.user.bio}
        </Row> */}

      </div>


    )
  }
}

export default Profile;
