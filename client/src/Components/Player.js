import React from 'react';
import axios from 'axios';

export class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            name: [],
            country: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handleChanges = e => {
        this.setState({ userText: e.target.value });
        // console.log(e.target.value);
    }

    fetchUsers = e => {
        //e.preventDefault();
        //console.log(this.state.userText);
        axios.get(`http://localhost:5000/api/players`)
        //axios.get(`https://api.github.com/users/ZachM89`)
            .then( res => {
                //console.log(this.state.userText);
                //console.log(res.data[1]);
                this.setState({name: [res.data[1].name]})
                this.setState({country: [res.data[1].country]})
        })
        //console.log(this.state.users);
    }

    // handleChanges = e => {
    //     console.log(e);
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // submitItem = e => {
    //     e.preventDefault();
    //     this.props.addItem(e, this.state.item);
    // };

    render() {
        console.log('rendering form', this.state.name);

        return (
            <div>
                {/* <div>
                    <button onClick={this.fetchUsers}>Fetch Users</button>
                </div> */}
                <div className="charts">
                    {/* <h2 className="player__info">{this.state.name}</h2> */}
                    <h2 className="player__info">Megan Rapinoe</h2>
                    <h2 className="player__info">{this.state.country}</h2>
                </div>
            </div>
        );
    }
}

export default Player;