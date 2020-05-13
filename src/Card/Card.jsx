import React, { Component } from 'react'

class Card extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            imgUrl: 'https://robohash.org/3?set=set' + this.props.user.id
        }
    }

    render() {
        return (
            <div>
                <img alt={this.props.user.id} src={this.state.imgUrl}></img>
                <h1>{this.props.user.name}&nbsp;known as&nbsp;{this.props.user.username}</h1>
                <p>{this.props.user.company.catchPhrase}</p>
            </div>
        );
    }
}

export default Card;