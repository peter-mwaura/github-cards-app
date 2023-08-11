import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.username);
		this.setState({username: ''});
	};

	render() {
  	return (        
    	<form 
    		className="my-12 flex gap-8" 
    		action="/"
    		onSubmit={this.handleSubmit}
    	>
    		<input 
    			className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    		 	type="text" 
    		 	placeholder="Enter GitHub Username"
    		 	value={this.state.username}
    		 	onChange={(event) => this.setState({username: event.target.value})}
    		 />
    		<button 
    			className="text-white border-2 hover:bg-gray-500 hover:border-gray-500 p-2 rounded-md hover:scale-110 duration-300"
    		>
    				Add Card
    		</button>
    	</form>
    );
  }
}

export default Form;
