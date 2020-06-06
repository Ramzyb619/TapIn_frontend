import React, { Component } from 'react';

class MyEvents extends React.Component {
state = {
    myEvents: [],
}

// *********************************DO A CARSOUL FOR THE EVENTS ATTENDING**************************
    componentDidMount() {
        let userId = localStorage.getItem("user_id");
        fetch(`http://localhost:3000/users/${userId}/events_attending`)
            .then(resp => resp.json())
            .then(data => this.setState({
                myEvents: data
            }))
    }
    
    render() {
        console.log()
      return (
          <div>
              {this.state.myEvents}HEY
          </div>
      )
    }
  




}

  export default MyEvents;