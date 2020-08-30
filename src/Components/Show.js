import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';


class Show extends Component {
    state = {
        show: [],
        descriptionHeight: "40px",
        isAttending: false
    }
    console.log(state.show)
    
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        fetch(`http://localhost:3000/events/${id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                show: data
            }))
    }

    handleEvent = (e) => {
        let id = this.props.match.params.id;

        e.preventDefault()
        let user_id = localStorage.getItem("user_id")
        let event_id = id

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

    handleClick = (e) => {
        e.preventDefault()
        this.setState(
            {
                descriptionHeight: "150px"
            })
    }
    render() {
        let button;
        if (this.state.isAttending) {
            button = <Button block variant="outline-success" > Congrats, You Have Tickets </Button>;
        } else {
            button = <Button block variant="outline-success" onClick={this.handleEvent}>  Attend This Event  </Button>;
        }
        console.log(this.state.show)
        return (

                <div className="" >
                    <Row>
                        <Col xs={8} className= "  p-0">
                            <img class="event-img img-fluid p-0" src={this.state.show.img_url}  ></img>
                        </Col>

                        <Col xs={4}>
                            <h2>
                                {this.state.show.title}
                            </h2>
                            <br/>
                            <h5> Date/Time:</h5> {this.state.show.formatted_datetime}
                            <br/>
                            <br/>



                            {this.state.show.user_name &&
                            
                                <span>  <h5>Host:</h5> {this.state.show.user_name} </span>
                            }
                        </Col>
                    </Row>
                    <Row className="w-100 border">
                        <Col md={{ offset: 8, span: 4 }}>
                            {button}
                        </Col>
                    </Row>

                    <Row>
                            <Col xs={8}> 
                            <h2>  Description:</h2> <div style={{ overflow: "hidden", height: this.state.descriptionHeight }} >{this.state.show.description}</div>
                            <br />
                            <br />
                            <Button onClick={this.handleClick} > Show More </Button>

                    
                        </Col>
                        <Col xs="4" className="" >
                            <h2> Category:</h2>{this.state.show.category}
                            <h2>Location: </h2>{this.state.show.location}
                            <h2>  Date/Time:</h2> {this.state.show.formatted_datetime}
                            </Col>
                    </Row>
                </div>

        )
    }
}

export default Show