import React from 'react';

import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer'

const Layout = (props) => (
     //let HeaderComponent = this.props.isAuthed ? <Header/> : null;
    //let HeaderComponent = <Header/>;            
    <Aux>
        <Header/>
        <div>
            { props.children }
        </div>
        <Footer />
    </Aux>
);
       
export default Layout;