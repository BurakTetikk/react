import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import UserCard from "./user-card";

const UserCards = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://67cbbcec3395520e6af62733.mockapi.io/api/v1/users', {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);


    return (<Container>
        {loading && <Spinner animation="border" variant="primary"/>}
        <Row>
            {users.map(user =>
                <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
                    <UserCard {...user}/>
                </Col>)}

        </Row>
    </Container>);
};

export default UserCards;