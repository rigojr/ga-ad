import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import styles from './AllTable.module.css';
import stylesCard from '../Card/Card.module.css';

const AllTable = ( props ) => {


    return(
        <Card className={`${stylesCard.Card} ${stylesCard.TableCard}`}>
            <Container>
                <Row lg={2}>
                    <Col xs lg="12">
                        <Table 
                            responsive
                            className={styles.Table}>
                            <thead
                                className={styles.Thead}>
                                <tr>
                                    {
                                        props.theadArray.map(
                                            thead => {
                                                return (
                                                    <th key={thead}>{thead}</th>
                                                )
                                            }
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody
                                className={styles.Tbody}>
                                    {
                                        props.payloadArray.map(
                                            payload => (
                                                <tr 
                                                    key={payload.id}
                                                    className={styles.Tr}>
                                                    {
                                                        Object.values(payload).map(
                                                            (e, index) => (
                                                                <td key={`${index}-${payload.id}`}>{e}</td>
                                                            )
                                                        )
                                                    }
                                                    <td>
                                                        <DropdownButton 
                                                            id="dropdown-item-button" 
                                                            drop="left"
                                                            title="">
                                                                <Dropdown.Item 
                                                                    as="button"
                                                                    onClick={props.consultHandler}>
                                                                    Consultar
                                                                </Dropdown.Item>
                                                                <Dropdown.Item 
                                                                    as="button"
                                                                    onClick={props.updateHandler}>
                                                                    Actualizar
                                                                </Dropdown.Item>
                                                                {
                                                                    props.disableAction ? 
                                                                        <Dropdown.Item 
                                                                            as="button"
                                                                            onClick={props.disableHandler}>
                                                                            Habilitar/Inhabilitar
                                                                        </Dropdown.Item> :
                                                                    null
                                                                }
                                                        </DropdownButton>
                                                    </td>
                                                </tr> 
                                            )
                                        )
                                    }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};

export default AllTable;