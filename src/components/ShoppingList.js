import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Steak'},
            {id: uuid(), name: 'Water'}
        ]
    };
    render() {
        const { items } = this.state;
        return (
            <div className="ShoppingList">
                <Container>
                    <Button color="dark" style={{marginBottom: '2rem'}}
                            onClick={() => {
                                const name = prompt('Enter Name');
                                if(name) {
                                    this.setState(state => ({
                                        items: [...state, {id: uuid(), name}]
                                    }))
                                }
                            }}></Button>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({id, name}) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default ShoppingList;
