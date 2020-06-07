import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';


class Show extends Component {
    state = {
        show: []
    }
    componentDidMount() {
        let id = this.props.match.params.id;
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
                        {/* <h3>Email:</h3> <h5>{this.state.user.email}</h5>
                        <h2> Phone Number:</h2>{this.state.user.phone_number}
                        <h2>Age: </h2>{this.state.user.age}
                        <h2>Bio:</h2> {this.state.user.bio} */}


                    </Col>
                </Row>
            </div>
        )
    }
}

export default Show