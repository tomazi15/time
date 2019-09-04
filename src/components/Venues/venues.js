import React, { Component } from 'react';

class Venues extends Component {
    render() {
        return (
            <div>
                <h3>List of Venues</h3>
                <ul>
                    {                    
                        this.props.data.map((venue) => {
                            return <li> { venue.name } </li> 
                        }) 
                    }
                </ul>         
            </div>
        );
    }

}

export default Venues;