import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class SearchBar extends React.Component {
    state = {
        query: ""
    }

    // fetch(`http://localhost:3000/users/${userId}/events_attending`)
//             .then(resp => resp.json())
//             .then(data => this.setState({
//                 myEvents: data
//             }))
    handleChange = (e) => {
        this.setState(
            {query: e.target.value}
        )
    }

    handleClick = (e) => {
        fetch(`http://localhost:3000/events/search?query=${this.state.query}`)
        .then(resp => resp.json())
        .then(data => this.props.searchCallback(data))        
    }

    render() {
        return (
            <div>
                <Form inline>
                    <FormControl type="text" placeholder="Search By Category" className="mr-sm-2" onChange={this.handleChange} />
                    <Button onClick={this.handleClick}>
                        Search
                  </Button>
                </Form>
            </div >
        )
    }

}

export default SearchBar;