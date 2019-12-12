import React from 'react';
import axios from 'axios';
import {ListGroup, ListGroupItem} from 'reactstrap';
// const instance = axios.create({baseURL: 'http://localhost:5000'})

class FlowersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flowers: []
        };

    }


  componentDidMount() {
    fetch('/api/flowers')
        .then(res => this.setState({ flowers: res.data }))
        .then(console.log("got flowers" + this.state.flowers))
  }

    render() {
        console.log("hello?");
        console.log("data" + this.state.flowers);
        const flowers = this.state.flowers;

        return (
            // <div>{this.state.flowers}</div>;
            <div>
                <h1>pls god</h1>
            {/* <ListGroup>
                    {flowers.map(({ name }) => (   
                        <h1>{name}</h1>       
                    ))}
                </ListGroup> */}
                </div>
        )
    }
}
export default FlowersList;