import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import UserCard from "./user-card";
import data from "./people.json";

const UserList = () => {
	const [users, setUsers] = useState(data);

	const handleDeleteAll = () => {
		setUsers([]);
	};

	const handleDelete = (id) => {
		const result = confirm("Emin misin?");
		if (!result) return;

		const arr = users.filter((item) => item.id !== id);
		setUsers(arr);
	};


    const handleSort = () => { 
        
     }

	return (
		<Container className="my-3 p-3">
			<h1>Bugun doganlar</h1>
			<p>Dogum gunu bugun olan {users.length} kisi bulundu</p>

			{users.map((item) => (
				<UserCard key={item.id} {...item} del={handleDelete}/>
			))}

			<Button variant="danger" onClick={handleDeleteAll}>
				Clear All
			</Button>

            <Button variant="info" onClick={handleSort} className="ms-3">
				Sort
			</Button>
		</Container>
	);
};

export default UserList;
