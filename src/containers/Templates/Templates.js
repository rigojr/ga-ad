import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import Subheader from '../../components/Layout/Subheader/Subheader';
import AllTable from '../../components/UI/Table/AllTable';
import AllModal from '../../components/UI/Modal/AllModal';
import ModalContent from '../../components/UI/Modal/TemplatesModalInfo/TemplatesModalInfo';

class Templates extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            templateTable: [
                {id:"1", name:"Template 1", leader:"Leader 1", email: "leader@email.com1"},
                {id:"2", name:"Template 2", leader:"Leader 2", email: "leader@email.com2"},
                {id:"3", name:"Template 3", leader:"Leader 3", email: "leader@email.com3"}
            ],
            pageTitle: "Plantillas del Sistema",
            modalTitile: "Crear Plantilla",
            searchPlaceholder: "Correo Electrónico",
            elementPage: "Plantilla",
            theaderTable: ["Id" ,"Nombre","Líder","Correo Electrónico", ""],
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
        console.log("Creating Template");
        this.setState( { createBoolean: true } );
    }

    render() {

        let templatesTable = this.props.isAuthed ?
            <AllTable 
                theadArray={this.state.theaderTable}
                payloadArray={this.state.templateTable}
                deleteAction={true}
                consultHandler={null}
                disableHandler={null}
                updateHandler={null}/>:
            <Redirect from="/templates" to="/login"/>;

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
                {templatesTable}
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

export default Templates;