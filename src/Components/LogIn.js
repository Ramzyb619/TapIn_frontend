import React, { useState } from 'react';
import { Button, Jumbotron, Form, FormGroup } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'; 


const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const doLogIn = (e) => {
        e.preventDefault()
        fetch ("http://localhost:3000/users/"+name)
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem("name", JSON.stringify(user))

        })
        .then(resp => history.push("/"))
    }


    return(
        <Jumbotron className="text-center"> 
        <div className="row">
            <div className="col-4 mx-auto"> 
                <Form onSubmit={doLogIn}>
                    <FormGroup> 
                        <Form.Label> Name: </Form.Label>
                    <Form.Control placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <Form.Label> Password: </Form.Label>
                    <Form.Control placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                    <FormGroup> 
                    </FormGroup>
                    <Button type="submit">Log In</Button>
                </Form>
            </div>
        </div>
        </Jumbotron>
    )
}

  export default LogIn;
