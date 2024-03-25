import React, { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { TfiPencil, TfiTrash } from "react-icons/tfi";
import { deleteProduct } from "./api";

const ProductCard = (props) => {
	const [deleting, setDeleting] = useState(false);
	const {
		id,
		image,
		title,
		desc,
		price,
		setOp,
		setCurrentProductId,
		setRefreshList,
	} = props;

	const handleEdit = () => {
		setCurrentProductId(id);
		setOp("edit");
	};

	const handleDelete = async () => {
		const answer = confirm("Are you sure to delete?");
		if (!answer) return;

		setDeleting(true);
		try {
			await deleteProduct(id);
			setRefreshList(Math.random())
		} catch (err) {
			alert(err.message);
		} finally {
			setDeleting(false);
		}
	};

	return (
		<Card className="text-center">
			<Card.Body>
				<Card.Img variant="top" src={image} />
				<Card.Title className="mt-4">{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>
				<Card.Subtitle>${price}</Card.Subtitle>
				<Button
					variant="danger"
					size="lg"
					className="mt-3"
					onClick={handleDelete}
				>
					{deleting ? (
						<Spinner variant="info" size="sm" />
					) : (
						<TfiTrash />
					)}
				</Button>
				<Button
					variant="warning"
					size="lg"
					className="mt-3 ms-3"
					onClick={handleEdit}
					disabled={deleting}
				>
					<TfiPencil />
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
