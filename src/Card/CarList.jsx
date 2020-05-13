import React, { Component } from 'react'
import Card from './Card.jsx';

class CardList extends Component {

    render() {
        return (
            <div>
                {this.props.users.map((user) => (
                <Card key={user.id.toString()} user={user} />
                ))}
          </div>
        );
    }
}

export default CardList;