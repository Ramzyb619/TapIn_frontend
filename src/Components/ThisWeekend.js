import React, { Component } from 'react';
import { Row, CardColumns } from 'react-bootstrap';
import EventCard from './EventCard';

class ThisWeekend extends React.Component {
  state = {
    weekendEvents: []
  }
  console.log(state.weekendEvents)
  
  componentDidMount() {
    fetch("http://localhost:3000/events/this-weekend")
        .then(resp => resp.json())
        .then(data => this.setState({
            weekendEvents: data
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
                {this.state.weekendEvents.map((weekendEvents, index) => {
                    return <EventCard
                        key={weekendEvents.id}
                        index={index}
                        event={weekendEvents}
                        />
                      })}
            </CardColumns>

        </Row>
        </div>
 

    )

    }
  }

  export default ThisWeekend;