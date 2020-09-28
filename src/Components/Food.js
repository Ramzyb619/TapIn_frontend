import React, { Component } from 'react';
import { Row, CardColumns } from 'react-bootstrap';
import EventCard from './EventCard';

class Food extends React.Component {
  state = {
    food: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/events/food")
        .then(resp => resp.json())
        .then(data => this.setState({
            food: data
        }))
}


    render() {
      return (
        <div>      
            <Row>
            <CardColumns>
                {this.state.food.map((food, index) => {
                    return <EventCard
                        key={food.id}
                        index={index}
                        event={food}
                        />
                })}
                 
            </CardColumns>

        </Row>
        </div>
 

    )

    }
  }

  export default Food;



