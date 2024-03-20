import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { FaBirthdayCake, FaTrashAlt } from "react-icons/fa";

const UserCard = (props) => {
	const { id, image, name, age, del } = props;

	return (
		<Card className="my-4">
			<Card.Body>
				<Row>
					<Col xs={3}>
						<Image
							src={`img/${image}`}
							roundedCircle
							className="img-fluid"
						/>
					</Col>
					<Col
						xs={9}
						className="d-flex flex-column justify-content-center "
					>
						<Card.Title>{name}</Card.Title>
						<Card.Subtitle>
							<FaBirthdayCake /> {age}
						</Card.Subtitle>
					</Col>
				</Row>
			</Card.Body>

			<button
				className="position-absolute end-0 top-0 p-3 btn"
				onClick={() => del(id)}
			>
				<FaTrashAlt />
			</button>
		</Card>
	);
};

export default UserCard;
