import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from '../Card.module.css';

const ProfileCard = ( props ) => (
    <Card className={`${styles.Card} ${styles.ProfileCard}`}>
        <Container>
            <Row>
                {props.children}
            </Row>
        </Container>
    </Card>
);

export default ProfileCard;