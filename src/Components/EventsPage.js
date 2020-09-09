import React, { Component } from 'react';
import { Row, CardColumns, Spinner } from 'react-bootstrap';
import EventCard from './EventCard';



class EventsPage extends React.Component {

    state = {
        events: [],
        display: [],
        eventsAttending: []
    }
console.log(state.events)
    componentDidMount() {
        fetch("http://localhost:3000/events")
            .then(resp => resp.json())
            .then(data => this.setState({
                events: data,
                display: data
            }))
            fetch("http://localhost:3000/user_events")
            .then(resp => resp.json())
            .then(data => this.setState({
                eventsAttending: data
            }))
    }


   // fetch("http://localhost:3000/sessions", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         accepts: "application/json"
    //     },
    //     body: JSON.stringify({
    //         password: password,
    //         email: email,
    //     })
    // })
    componentDidUpdate(prevProps) {
        if (prevProps.searchResults !== this.props.searchResults){
            if(this.props.searchResults && this.props.searchResults.length > 0){
                this.setState({
                    display: this.props.searchResults
                })
            }
        }       
    }

    render() {
        console.log(this.state.events)
        return (
            <Row>
                <CardColumns>
                    {this.state.display.map((event, index) => {
                        return <EventCard
                            key={event.id}
                            index={index}
                            event={event}
                            />
                    })}
                      <Spinner animation="grow" variant="dark" />
                      
                </CardColumns>

            </Row>

        )
    }
}


export default EventsPage;
