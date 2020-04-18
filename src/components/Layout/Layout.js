import React from 'react';

import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer'

const Layout = (props) => (
         
    <Aux>
        {props.isAuthed ? <Header authHandler={props.authHandler} /> : null}
        <div>
            { props.children }
        </div>
        <Footer />
    </Aux>
);
       
export default Layout;