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
        let userId = localStorage.getItem("user_id");

        e.preventDefault()
         
        fetch("http://localhost:3000/user_events/", { 
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ 
            userId: userId,
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
                {this.state.myEvents.length === 0 &&
                    <div className="d-flex align-items-center justify-content-center vh-80">
                        <div className="justify-content-center">
                        <h3>You currently are not attending any events.</h3>
                        <div className="d-flex justify-content-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUfvxYoPrubu9pZbrUq3DpfF3KRTLX-k72FQS0X0GK2YAuXpfO&usqp=CAU"/>
                        </div>
                        </div>
                    </div>

               
    }
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


   

  // fetch("http://localhost:3000/events", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         accepts: "application/json"
