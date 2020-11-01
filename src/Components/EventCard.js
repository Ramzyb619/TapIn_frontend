import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 



class EventCard extends Component {

    state = {
        isAttending: false
    }


    handleEvent = (e) => {
        e.preventDefault()
        let user_id = localStorage.getItem("user_id")
        let event_id = this.props.event.id
        // const history = useHistory();

         
        // if( !user_id){
        //     this.props.history.push("/signup")
        // }
        // else

        fetch("http://localhost:3000/user_events/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                user_id: user_id,
                event_id: event_id
            })
        })
            .then(resp => resp.json())
            .then(resp => this.setState({
                isAttending: true
            }))

    }

  // fetch("http://localhost:3000/events", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         accepts: "application/json"

    render() {
        let button;
        if (this.state.isAttending) {
            button = <Button variant="outline-success" > Congrats, You Have Tickets </Button>;
        } else {
            button = <Button variant="outline-success" onClick={this.handleEvent}>  Attend This Event  </Button>;
        }
  
        const { title, category, location, img_url, description, id } = this.props.event
        return (
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    {/* <Button variant="outline-success" onClick={this.handleEvent} >
                        Attend This Event
                    </Button> */}
                    {button}
                    {'  '}

                    <Link to={`/show/${id}`}>
                        <Button variant="outline-success" >
                            View This Event
                        </Button>{'  '}
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}


export default EventCard
