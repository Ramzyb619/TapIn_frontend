import React, { useState } from 'react';
import { Button, Jumbotron, Form, FormGroup, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    // const doLogIn = (e) => {
    //     e.preventDefault()
    //     fetch ("http://localhost:3000/users/"+name)
    //     .then(resp => resp.json())
    //     .then(user => {
    //         localStorage.setItem("name", JSON.stringify(user))

    //     })
    //     .then(resp => history.push("/"))
    // }
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


    return (
        <Jumbotron className="text-center">
            <div className="row">
                <div className="col-4 mx-auto">
                    <Form onSubmit={doLogIn}>
                        <FormGroup>
                            <Form.Label> Email: </Form.Label>
                            <Form.Control placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <Form.Label> Password: </Form.Label>
                        <Form.Control placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                        <FormGroup>
                        </FormGroup>
                        <Spinner animation="border" variant="success" />
                        <Button type="submit" variant="warning">Log In</Button>
                    </Form>
                </div>
            </div>
        </Jumbotron>
    )
}

export default LogIn;
