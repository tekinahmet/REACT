import React from "react";
import { Card } from "react-bootstrap";

const UserCard = (props) => {
    const {avatar, firstName, lastName, email} = props;
	return (
		<Card>
			<Card.Img src={avatar} />
			<Card.Body>
				<Card.Title>{firstName} {lastName}</Card.Title>
				<Card.Subtitle>{email}</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default UserCard;
