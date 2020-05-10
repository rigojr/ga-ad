import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import styles from '../AllModal.module.css';

const CompaniesModalInfo = ( props ) => (

    <Form className={`${styles.FormBase}`}>
        <Row>
            <Form.Group as={Col}>
            <Form.Label>Rif</Form.Label>
                <Form.Control
                    as="input"/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Razón Social</Form.Label>
                <Form.Control
                    type="input" />
            </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col}>
                <Form.Label>Nombre del Representante</Form.Label>
                <Form.Control
                    type="input" />
            </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>Correo Electrónico del Representate</Form.Label>
                <Form.Control
                    type="email" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Teléfono del Representante</Form.Label>
                    <Form.Control
                        type="input" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Firma Digital del Representante</Form.Label>
                <Form.File 
                    id="custom-file"/>
            </Form.Group>
        </Row>        
    </Form>
);

export default CompaniesModalInfo;