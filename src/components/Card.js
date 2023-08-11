import React from 'react';
// name, company, avatar_url

class Card extends React.Component {
	render() {
		return (
			<div className="flex items-center gap-2 bg-white text-gray-500 border-2 rounded-md py-2 px-6 m-2">
				<img className="w-[75px] rounded-full" src={this.props.avatar_url} alt={this.props.name}/>
				<div>
					<p>{this.props.name}</p>
					<p>{this.props.company}</p>
				</div>
			</div>
		)
	}
}

export default Card;
