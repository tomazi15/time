import React, { Component } from 'react';
import { USERSDATA, VENUESDATA } from '../data/data';
import Users from '../components/Users/users';
import Venues from '../components/Venues/venues';

class Preferances extends Component {
    state = {result: null};

    result = (data) => {
        let answer = [];
        data.forEach(({wont_eat, drinks}) => {
            return answer.push(this.matchPreferances(wont_eat, drinks));     
        });

        this.setState({result: [...answer]})
    }

    getUserFood = (data) => {
        for(let i = 0; i < data.length; i++) {
            return data[i];
        }
    }
    getUserDrinks = (data) => {
        for(let i = 0; i < data.length; i++) {
            return data[i];
        }
    }

    matchPreferances = (userFood, userDrink) => {
        let f = this.getUserFood(userFood);
        let d = this.getUserDrinks(userDrink);
        let res = [];

        VENUESDATA.forEach(({name, food, drinks}) => {
            
            let t1 = food.indexOf(f) > -1;

            if (!t1) {
                res.push(name);
            } else {
                return false;
            }
        });

        return res;
    }

    render () { 
        console.log('Restaurants Members can go to individually',this.state.result);
        return (
            <div>
                <div className="user-venue">
                    <Users data={USERSDATA} />
                    <Venues data={VENUESDATA} />
                    <button onClick={ () => {this.result(USERSDATA) }}>Results</button>
                </div>
            </div>
        );
    }
}

export default Preferances;