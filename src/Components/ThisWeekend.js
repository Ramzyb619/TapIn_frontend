import React, { Component } from 'react';
import { Row, CardColumns } from 'react-bootstrap';
import EventCard from './EventCard';

class ThisWeekend extends React.Component {
  state = {
    weekendEvents: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/events/this-weekend")
        .then(resp => resp.json())
        .then(data => this.setState({
            weekendEvents: data
        }))
}

//console.log(time.date)

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