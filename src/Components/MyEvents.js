import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Col, Row, Button} from 'react-bootstrap';

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

    handleDelete = (e, event_id) => {
        e.preventDefault()
         
        fetch(`http://localhost:3000/events/${event_id}`, { 
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ 
            event_id: event_id
        })
    })
        .then(resp => resp.json())
        .then(resp => {
            function filterFunction(event) {
                return (event.id != event_id);
            }
            let filteredEvents = this.state.myEvents.filter(filterFunction);
            this.setState({
                myEvents: filteredEvents
            })
        })
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
                                <Button onClick = { (e) => this.handleDelete(e, event.id)}> Delete This Event </Button>
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