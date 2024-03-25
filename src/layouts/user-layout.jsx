import React from "react";
import Header from "../components/00-common/header";
import Footer from "../components/00-common/footer";
import MainMenu from "../components/00-common/main-menu";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
	return (
		<>
			<Header />
			<Container className="my-4">
				<Row className="">
					<Col md={4} lg={3} >
						<MainMenu />
					</Col>
					<Col md={8} lg={9}>
						<Outlet />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default UserLayout;