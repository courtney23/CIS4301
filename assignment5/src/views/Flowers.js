import React from 'react';


class Flowers extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			genus: '',
			species: '',
			comname: ''
		};

		this.handleGenusChange = this.handleGenusChange.bind(this);
        this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
        this.handleComnameChange = this.handleComnameChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleGenusChange(event){
		this.setState({name: event.target.value});
	}
	handleSpeciesChange(event){
		this.setState({code: event.target.value});
    }
    handleComnameChange(event){
		this.setState({code: event.target.value});
    }
    
    handleSubmit(event){
		event.preventDefault();
		if (this.state.genus === ''){
			alert("missing genus entry");
		}
		
		if(this.state.species === ''){
			alert("missing species entry");
		}
		if(this.state.comname === ''){
			alert("missing comname entry");
		}

		//this.props.data.push(this.state);

	}
    render(){
    return (
        <>
            <div className="column1">
                <p>Welcome to the Southern Sierra Wildflower Club</p>
            </div>


            <div className="column2">
            <div class="card bg-light mb-3">
            <div class="card-header">Insert</div>
            <div class="card-body">
                <form>
                    <label>
                        Genus: 
                    <input type="text" name="genus"
				    onChange={this.handleGenusChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Species:
                    <input type="text" name="species"
				    onChange={this.handleSpeciesChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Common Name:
                    <input type="text" name="comname"
				    onChange={this.handleComnameChange} />
                    </label>
                    <br />
                    <br />
                    <button onClick={this.handleSubmit} type="button" class="btn btn-outline-dark">Submit</button>
                </form>
            </div>
            </div>
                

            </div>

        </>
    );
}
}

export default Flowers;