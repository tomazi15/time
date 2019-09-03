import React, { Component } from 'react';

class Users extends Component {
    
    memberList = (members) => {
        return members.map((member) => {
            return member.name;
        })
    } 

    render() {
        return (
            <div>
                <ul>
                    <li> { this.memberList(this.props.data) } </li>
                </ul>         
            </div>
        );
    }
}

export default Users;