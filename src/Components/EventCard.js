import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Button, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class EventCard extends Component {
    
    render(){
      const {title,category,location,img_url,description,id} = this.props.event
     return(  
        <Card>
            <Card.Img variant="top" src={img_url}/> 
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>
                   {description}
                </Card.Text>
                <Button variant="outline-success" >
                    Add To Your Events
                </Button>{'  '}
                <Link to={`/show/${id}`}> 
                <Button variant="outline-success" >
                    View This Event
                </Button>{'  '}
                </Link>
            </Card.Body>
        </Card>
     )}
}


export default EventCard
