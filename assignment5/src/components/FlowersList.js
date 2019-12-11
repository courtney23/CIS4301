import React from 'react';
class FlowersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };

    }
    componentDidMount() {
        fetch('/api/listFlowers')
            .then(res => {
                // console.log(res);
                return res;
            })
            .then(res => {
                // console.log('My data is:' + res);
                this.setState({
                    data: JSON.stringify(res)
                })
                // console.log('My data is:' + this.state.data);
            })
    }


    render() {
        const { filterText, selectedUpdate } = this.props;
        console.log("hello?");
        console.log("data" + this.state.data);
        const flowers = this.state.data;
        return <div>{this.state.data}</div>;
    }
}
export default FlowersList;