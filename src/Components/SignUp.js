import React, { useState } from 'react';
import { Button, Alert, Form, FormGroup, Jumbotron } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'; 

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [message, setMessage] = useState('');

    const register = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        })
            .then(resp => resp.json())
            .then(newUser => setMessage("You're all signed up, please log in!"))
            .then(resp => history.push("/login/"))
    }

    return (
        <Jumbotron className="text-center"> 
        <div className="row">
            <div className="col-4 mx-auto"> 
                <Form onSubmit={register}>
                    <FormGroup> 
                        <Form.Label> Name: </Form.Label>
                    <Form.Control placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <Form.Label> Password: </Form.Label>
                    <Form.Control placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                    <FormGroup> 
                    </FormGroup>
                    <Button type="submit">Sign Up</Button>
                    <Alert> {message} </Alert>
                </Form>
            </div>
        </div>
        </Jumbotron>


    )
}


export default SignUp