import React from 'react';
import Card from './Card';

const CardList = ({profiles}) => {
	return (
		<div className="flex flex-col">
			{
				profiles.map(profile => <Card key={profile.id} {...profile} />)
			}
		</div>
	)
}

export default CardList;