import React, { Component } from 'react';

class Users extends Component {
    
    render() {
        return (
            <div>
                <h3>List of Members</h3>
                <ul className="troll">
                    {                    
                        this.props.data.map((member) => {
                            return <li> { member.name } </li> 
                        }) 
                    }
                </ul>         
            </div>
        );
    }
}

export default Users;