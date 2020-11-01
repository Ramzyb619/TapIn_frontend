import React, { useState } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const AddEvent = (props) => {
    const [title, setTitle] = useState('');
    const [image, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [dateTime, setDateTime] = useState('');
    const history = useHistory();


    const create = (e) => {
        e.preventDefault()
        let user_id = localStorage.getItem("user_id")

        fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                title: title,
                img_url: image,
                description: description,
                location: location,
                category: category,
                date_time: dateTime,
                user_id: user_id
            })
        })
            .then(resp => resp.json())
            .then(resp => history.push(`/show/${resp.id}`))
    }

   



    return (
        <div>

            <Form onSubmit={create}>
                <FormGroup>
                    <Form.Label> Title: </Form.Label>
                    <Form.Control placeholder="Enter Title" onChange={e => setTitle(e.target.value)} />
                </FormGroup>
                <Form.Label> Image: </Form.Label>
                <Form.Control placeholder="Enter Your Image" onChange={e => setImageUrl(e.target.value)} />
                <FormGroup>
                </FormGroup>
                <Form.Label> Description: </Form.Label>
                <Form.Control placeholder="Tell us about your event" onChange={e => setDescription(e.target.value)} />
                <FormGroup>
                </FormGroup>
                <Form.Label> Location: </Form.Label>
                <Form.Control placeholder="Enter Location" onChange={e => setLocation(e.target.value)} />
                <FormGroup>
                </FormGroup>
                <Form.Label> Category: </Form.Label>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    {/* <Form.Label>Select a Category</Form.Label> */}
                    <Form.Control as="select"  onChange={e => setCategory(e.target.value)} >
                        <option>Music</option>
                        <option>Charity and Causes</option>
                        <option>This Weekend</option>
                        <option>Food and Drink</option>
                    </Form.Control>
                </Form.Group>

                {/* <Form.Control placeholder="Enter Category" onChange={e => setCategory(e.target.value)} /> */}
                <FormGroup>
                </FormGroup>
                <Form.Label> Date/Time: </Form.Label>
                <Form.Control placeholder="dd/mm/yyyy hh:mm AM/PM" onChange={e => setDateTime(e.target.value)} />
                <FormGroup>
                </FormGroup>

                <Button type="submit">Create Event</Button>
            </Form>
        </div>


    )

}



export default AddEvent;