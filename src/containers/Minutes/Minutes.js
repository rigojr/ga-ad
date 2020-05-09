import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import styles from './Minutes.module.css' 
import Aux from '../../hoc/Aux';
import Subheader from '../../components/Layout/Subheader/Subheader';

class Dashboard extends Component {

    componentDidMount () {
        console.log("Dashboard.js is mount")
        // Here we ask for the initial data
    }

    render (){

        let DashboardComponent = this.props.isAuthed ?
            <Card className={styles.DashboardCard}>
                <Container>
                    <Row>
                        <Col xs lg="12">
                            <h1>Lista de Elecciones Activas</h1>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Empresa</th>
                                        <th>ODS</th>
                                        <th>Líder</th>
                                        <th>Estatus</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Card> 
            : 
            <Redirect from="/minute" to="/login"/>;

        return (
            <Aux>
                <Subheader/>
                {DashboardComponent}
            </Aux>
        )
    }


}

export default Dashboard;