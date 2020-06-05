import React, { Component } from 'react';
import { Row, CardColumns } from 'react-bootstrap';
import EventCard from './EventCard';



class EventsPage extends React.Component {

    state = {
        events: [],
    }

    componentDidMount() {
        fetch("http://localhost:3000/events")
            .then(resp => resp.json())
            .then(data => this.setState({
                events: data
            }))
    }

    render() {
        console.log(this.state.events)
        return (
            <Row>
                <CardColumns>
                    {this.state.events.map((event, index) => {
                        return <EventCard
                            key={event.id}
                            index={index}
                            event={event}
                            />
                    })}
                </CardColumns>

            </Row>

        )
    }
}


export default EventsPage;
