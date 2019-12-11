import React from 'react';
class FlowersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

    }
    componentDidMount() {
        fetch('/api/listFlowers')
            .then(res => {
                console.log(res.text());
                return res;
            })
            .then(res => {
                console.log('My data is:' + res);
                this.setState({
                    data: JSON.stringify(res)
                })
            })
    }


    render() {
        const { filterText, selectedUpdate } = this.props;
        console.log("hello?");
        console.log("data" + this.state.data);

        return <div>
            <h1>hi</h1>
            {this.state.data}
        </div>;
    }
}
export default FlowersList;