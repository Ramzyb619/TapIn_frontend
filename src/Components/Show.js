import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';


class Show extends Component {
    state = {
        show: []
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        fetch(`http://localhost:3000/events/${id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                show: data
            }))
    }
    render() {

        console.log(this.state.show)
        return (
            <div>
                <Row className="justify-content-md-center" >
                    <Col xs="4">
                        <h3>
                            {this.state.show.title}
                        </h3>
                        <img src={this.state.show.img_url} ></img>
                        <h3>Title:</h3> <h5>{this.state.show.title}</h5>
                        <h2> Category:</h2>{this.state.show.category}
                        <h2>Location: </h2>{this.state.show.location}
                        <h2>Description:</h2> {this.state.show.description}
                        <h2>Date/Time:</h2> {this.state.show.date_time}
                        {this.state.show.user_name &&
                        <span>  <h2>Host:</h2> {this.state.show.user_name} </span>
                            }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Show