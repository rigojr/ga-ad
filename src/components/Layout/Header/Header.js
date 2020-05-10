import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import styles from './Header.module.css'
import daycohostLogo from '../../../assets/img/daycohost-venezuela.png';

const header = ( props ) => (

    <header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                <Link to="/dashboard" className={styles.purpleColor}>
                    <img src={daycohostLogo} alt="UCAB Logo" className={styles.LogoDaycohost}/>
                </Link>
            </Navbar.Brand>
            <Nav className="ml-auto">
                <DropdownButton id="dropdown-item-button" title="Bienvenido, Yudana" drop="left">
                    <Dropdown.Item as="button">
                        <Link 
                            to="/minutes" 
                            className={styles.NavLink}>
                                Actas
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <Link 
                            to="/users" 
                            className={styles.NavLink}>
                                Usuarios
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <Link 
                            to="/profile" 
                            className={styles.NavLink}>
                                Perfil
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <Link 
                            to="/login" 
                            onClick={props.authHandler} 
                            className={styles.NavLink}>
                                Cerrar Sesión
                        </Link>
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Navbar>
    </header>
);

export default header;