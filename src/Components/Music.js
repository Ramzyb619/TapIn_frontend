import React, { Component } from 'react';
import { Row, CardColumns } from 'react-bootstrap';
import EventCard from './EventCard';

class Music extends React.Component {
  state = {
    musicEvents: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/events/music")
        .then(resp => resp.json())
        .then(data => this.setState({
            musicEvents: data
        }))
}

    render() {
      console.log(this.state.musicEvents)
      return (
        <Row>
            <CardColumns>
                {this.state.musicEvents.map((musicEvent, index) => {
                    return <EventCard
                        key={musicEvent.id}
                        index={index}
                        event={musicEvent}
                        />
                })}
                 
            </CardColumns>

        </Row>

    )

    }
  }

  export default Music;
