import React, { useState } from 'react';
import { Button, Jumbotron, Form, FormGroup, Spinner, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    document.body.classList.add("bg-color-dimgray");

  
    const doLogIn = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/sessions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                password: password,
                email: email,
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.errors) {
                    console.log("erorr")
                }
                else {
                    localStorage.setItem("user_id", resp.id);
                    history.push("/");
                }

            })
            

    }



 // fetch("http://localhost:3000/events", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         accepts: "application/json"


    return (
        <Row className="d-flex justify-content-center"  >
            <Col xs={12} lg={8}>
                <Row className="bg-color-white">
                    <Col className="p-0" xs={4}> <img className="login-image" src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&w=1000&q=80" /> </Col>
                    <Col xs={8}>
                        <Form onSubmit={doLogIn}>
                            <FormGroup>
                                <Form.Label> Email: </Form.Label>
                                <Form.Control placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <Form.Label> Password: </Form.Label>
                            <Form.Control placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                            <FormGroup>
                            </FormGroup>
                            <Button type="submit" variant="warning">Log In</Button>
                            {/* <Spinner animation="border" variant="success" /> */}
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default LogIn;
