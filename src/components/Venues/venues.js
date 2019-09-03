import React, { Component } from 'react';

class Venues extends Component {
    venueList = (venues) => {
        return venues.map((venue) => {
            return venue.name;
        })
    } 
    render() {
        return (
            <div>
                <ul>
                    <li> { this.venueList(this.props.data) } </li>
                </ul>         
            </div>
        );
    }

}

export default Venues;