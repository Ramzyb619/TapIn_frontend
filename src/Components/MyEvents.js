import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Col, Row} from 'react-bootstrap';

class MyEvents extends React.Component {
    state = {
        myEvents: [],
    }

    componentDidMount() {
        let userId = localStorage.getItem("user_id");
        fetch(`http://localhost:3000/users/${userId}/events_attending`)
            .then(resp => resp.json())
            .then(data => this.setState({
                myEvents: data
            }))
    }
    render() {
        console.log(this.state.myEvents)
        return (
            <div>
                <Row className="justify-content-md-center"> 
                <Col xs={9}>
                <Carousel>
                    {this.state.myEvents.map((event) => {
                        return <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={event.img_url}
                                alt={event.title}
                            />
                            <Carousel.Caption>
                                <h3>{event.title}</h3>
                                <p>{event.location}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
                </Col>
                </Row>
            </div>
        )
    }
}

export default MyEvents;