import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import Subheader from '../../components/Layout/Subheader/Subheader';
import AllTable from '../../components/UI/Table/AllTable';
import AllModal from '../../components/UI/Modal/AllModal';
import ModalContent from '../../components/UI/Modal/MinutesModalInfo/MinutesModalInfo';

class Minutes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            minutesTable: [
                {id:"1", company:"Empresa 1", ods:"DAT-XXXX COM-YYYY", leader:"Líder 1", status:"En Proceso"},
                {id:"2", company:"Empresa 2", ods:"DAT-XXXX COM-YYYY", leader:"Líder 2", status:"Listo"},
                {id:"3", company:"Empresa 3", ods:"DAT-XXXX COM-YYYY", leader:"Líder 3", status:"En Proceso"}
            ],
            pageTitle: "Actas del Sistema",
            modalTitile: "Crear Acta",
            searchPlaceholder: "ODS",
            elementPage: "Acta",
            theaderTable: ["id" ,"Empresa","ODS","Líder", "Estado",""],
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

        let minutesTable = this.props.isAuthed ?
            <AllTable 
                theadArray={this.state.theaderTable}
                payloadArray={this.state.minutesTable}
                deleteAction={true}
                consultHandler={null}
                disableHandler={null}
                updateHandler={null}/>:
        <Redirect from="/minutes" to="/login"/>;

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
                {minutesTable}
                <AllModal 
                    modalBoolean={this.state.showModal}
                    showModal={this.modalHandler}
                    modalTitile={this.state.modalTitile}
                    createHandler={this.createHandler}
                    createBoolean={this.state.createBoolean}>
                    <ModalContent 
                        searchUser={null}/>
                </AllModal>
            </Aux>
        );
    }
}

export default Minutes;