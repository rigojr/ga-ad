import React from 'react';

import styles from './Footer.module.css'
import ucabLogo from '../../../assets/img/daycohost-venezuela.png';

const Footer = () => (
    <footer className={styles.footer}>
        <div>
            <p className={styles.pFooter}>Sistema Gestión de Actas de Activación/Desactivación, por José Salas</p>
            <img src={ucabLogo} alt="UCAB Logo" className={styles.LogoDaycohost}/>
        </div>
    </footer>
);

export default Footer;