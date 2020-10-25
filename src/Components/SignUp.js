import React, { useState } from 'react';
import { Button, Alert, Form, FormGroup, Jumbotron } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'; 

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [img_url, setImgUrl] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
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
                password: password,
                img_url: img_url,
                email: email,
                bio: bio, 
                age: age,
                phone_number: phone_number
            })
        })
            .then(resp => resp.json())
            .then(newUser => setMessage("You're all signed up, please log in!"))
            .then(resp => history.push("/login/"))
    }

    return (
        // <Jumbotron className="text-center"> 
        <div className="row">
            <div className="col-4 mx-auto"> 
                <Form onSubmit={register}>
                    <FormGroup> 
                        <Form.Label> Name: </Form.Label>
                    <Form.Control placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <Form.Label> Image: </Form.Label>
                    <Form.Control placeholder="Enter Your Image" onChange={e => setImgUrl(e.target.value)} />
                    <FormGroup> 
                    </FormGroup>
                    <Form.Label> Email: </Form.Label>
                    <Form.Control placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                    <FormGroup> 
                    </FormGroup>
                    <Form.Label> Age: </Form.Label>
                    <Form.Control placeholder="Enter Age" onChange={e => setAge(e.target.value)} />
                    <FormGroup> 
                    </FormGroup>
                    <Form.Label> Phone Number: </Form.Label>
                    <Form.Control placeholder="Enter Phone Number" onChange={e => setPhoneNumber(e.target.value)} />
                    <FormGroup> 
                    </FormGroup>
                    <Form.Label> Bio: </Form.Label>
                    <Form.Control placeholder="Tell Us About Yourself" onChange={e => setBio(e.target.value)} />
                    <FormGroup> 
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
        // </Jumbotron>


    )
}



// fetch("http://localhost:3000/events", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         accepts: "application/json"


export default SignUp