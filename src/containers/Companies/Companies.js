import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import Subheader from '../../components/Layout/Subheader/Subheader';
import AllTable from '../../components/UI/Table/AllTable';
import AllModal from '../../components/UI/Modal/AllModal';
import ModalContent from '../../components/UI/Modal/CompaniesModalInfo/CompaniesModalInfo';

class Compines extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companiesTable: [
                {id:"1", name:"Empresa 1", email:"Correo@electronico.com", phone:"1234567890", agent:"Agente 1"},
                {id:"2", name:"Empresa 2", email:"Correo@electronico.com", phone:"1234567890", agent:"Agente 2"},
                {id:"3", name:"Empresa 3", email:"Correo@electronico.com", phone:"1234567890", agent:"Agente 3"}
            ],
            pageTitle: "Compañias del Sistema",
            modalTitile: "Crear Compañía",
            searchPlaceholder: "Razón Social",
            elementPage: "Compañía",
            theaderTable: ["Rif" ,"Razón Social","Correo Electrónico","Teléfono", "Representate",""],
            disableAction: false,
            showModal: false,
            createBoolean: false
         };
    }

    modalHandler = ( create ) => {
        console.log("Modal Handler");
        const modalBoolean = this.state.showModal;
        const showModalUpdated = !modalBoolean;
        this.setState( { 
            showModal: showModalUpdated,
            createBoolean: create
        } );
    }

    createHandler = () => {
        console.log("Creating User");
        this.setState( { createBoolean: true } );
    }

    render() {

        let companiesTable = this.props.isAuthed ?
            <AllTable 
                theadArray={this.state.theaderTable}
                payloadArray={this.state.companiesTable}
                deleteAction={true}
                consultHandler={null}
                disableHandler={null}
                updateHandler={null}/>:
        <Redirect from="/companies" to="/login"/>;

        return (
            <Aux>
                <Subheader 
                    pageTitle={this.state.pageTitle}
                    searchPlaceholder={this.state.searchPlaceholder}
                    elementPage={this.state.elementPage}
                    disableAction={this.state.disableAction}
                    onChange={null}
                    searchHandler={null}
                    createHandler={ () => this.modalHandler(true) }/>
                {companiesTable}
                <AllModal 
                    modalBoolean={this.state.showModal}
                    showModal={this.modalHandler}
                    modalTitile={this.state.modalTitile}
                    createHandler={this.createHandler}
                    createBoolean={this.state.createBoolean}>
                    <ModalContent />
                </AllModal>
            </Aux>
        );
    }
}

export default Compines;