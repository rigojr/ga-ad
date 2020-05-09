import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from '../Form.module.css';

const ProfileForm = ( props ) => (
    <Form className={`${styles.FormBase}`}>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    as="input"/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    type="email" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Repetir Contraseña</Form.Label>
                    <Form.Control
                        type="password" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Button 
                    variant="secondary" 
                    onClick={props.passwordHandler}
                    className={`${styles.ButtonProfileForm}`}>
                    Modificar Contraseña
                </Button>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="input" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Firma Digital</Form.Label>
                <Form.File 
                    id="custom-file"/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Button 
                    variant="primary" 
                    onClick={props.saveInformationHandler}>
                    Guardar Infomración
                </Button>
            </Form.Group>
        </Row>
    </Form>
);

export default ProfileForm;