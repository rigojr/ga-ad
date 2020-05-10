import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import styles from '../AllModal.module.css';

const TemplatesModalInfo = ( props ) => (

    <Form className={`${styles.FormBase}`}>
        <Row>
            <Form.Group as={Col}>
            <Form.Label>Nombre</Form.Label>
                <Form.Control
                    as="input"/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
            <Form.Label>Contenido</Form.Label>
                <Form.Control
                    as="textarea"/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} lg="8">
                <Form.Label>Correo Electrónico del Agente</Form.Label>
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

export default TemplatesModalInfo;