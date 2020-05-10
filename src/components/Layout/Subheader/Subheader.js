import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import styles from './Subheader.module.css'

const subheader = ( props ) => (
    <Container className={styles.Container}>
        <Row>
            <Col xs lg="4">
                <h1 className={styles.TitileSubHeader}>{props.pageTitle}</h1>
            </Col>
            <Col xs lg="8">
                <Container>
                    <Row className={styles.InputRigth}>
                        <Form 
                            inline
                            className={styles.SomePadding}>

                            <FormControl 
                                type="text"
                                placeholder={props.searchPlaceholder}
                                onChange={props.onChange}/>

                            <Button 
                                variant="outline-primary"
                                onClick={props.searchHandler}>
                                Buscar
                            </Button>
                        </Form>
                        <Button 
                            variant="primary"
                            className={styles.SomePadding}
                            onClick={props.createHandler}>
                            Crear {props.elementPage}
                        </Button>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
);

export default subheader;