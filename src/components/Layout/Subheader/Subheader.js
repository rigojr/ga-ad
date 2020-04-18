import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import styles from './Subheader.module.css'

const subheader = () => (
    <Container className={styles.Container}>
        <Row>
            <Col>
                <h1 className={styles.TitileSubHeader}>Gestión de Actas de <br></br> Activación/Desactivación</h1>
            </Col>
            <Col>
                <Card className={styles.BtnsCard}>
                    <Container>
                        <Row>
                            <Col xs lg="8"> 
                                <Form inline>
                                    <FormControl 
                                        type="text"
                                        placeholder="Búsqueda"
                                        className={styles.Width100}/>
                                </Form>
                            </Col>
                            <Col xs lg="4">
                                <Button variant="primary" block>
                                    Crear Acta
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default subheader;