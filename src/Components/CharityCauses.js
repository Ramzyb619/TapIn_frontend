import React, { Component } from 'react';
import { Row, CardColumns } from 'react-bootstrap';
import EventCard from './EventCard';

class CharityCauses extends React.Component {
  state = {
    charityEvents: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/events/charity-events")
        .then(resp => resp.json())
        .then(data => this.setState({
            charityEvents: data
        }))
}

 

  // fetch("http://localhost:3000/events", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         accepts: "application/json"
    render() {
      return (
        <div>      
            <Row>
            <CardColumns>
                {this.state.charityEvents.map((charityEvents, index) => {
                    return <EventCard
                        key={charityEvents.id}
                        index={index}
                        event={charityEvents}
                        />
                })}
                 
            </CardColumns>

        </Row>
        </div>
 

    )

    }
  }

  export default CharityCauses;