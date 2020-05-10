import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import styles from '../AllModal.module.css';

const MinutesModalInfo = ( props ) => (

    <Form className={`${styles.FormBase}`}>
        <Row>
            <Form.Group as={Col}>
            <Form.Label>ODS</Form.Label>
                <Form.Control
                    as="input"/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} lg="8">
                <Form.Label>Correo Electrónico del Representate</Form.Label>
                    <Form.Control
                        type="email" />
            </Form.Group>
            <Form.Group as={Col} lg="4">
                <Form.Label className={styles.whiteColor}>Botón Buscador</Form.Label>
                <Button 
                    variant="primary"
                    onClick={props.searchUser}
                    block>
                    Buscar
                </Button>
            </Form.Group>
        </Row>      
    </Form>
);

export default MinutesModalInfo;