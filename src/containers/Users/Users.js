import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import Subheader from '../../components/Layout/Subheader/Subheader';
import AllTable from '../../components/UI/Table/AllTable';
import AllModal from '../../components/UI/Modal/AllModal';
import UserProfileForm from '../../components/UI/Form/ProfileForm/ProfileForm';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {id:"1", name:"Yudana Baldini", email:"yudana@daycohost.com", phone:"4142316548"},
                {id:"2", name:"José Salas", email:"rigojr@daycohost.com", phone:"4241156239"},
                {id:"3", name:"operaciones", email:"operaciones@daycohost.com", phone:"4169998754"}
            ],
            pageTitle: "Usuarios del Sistema",
            modalTitile: "Crear Usuario",
            searchPlaceholder: "Correo Electrónico",
            elementPage: "Usuario",
            theaderTable: ["id" ,"Nombre","Correo Electrónico","Teléfono", ""],
            disableAction: true,
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

        let usersTable = this.props.isAuthed ?
            <AllTable 
                theadArray={this.state.theaderTable}
                payloadArray={this.state.users}
                deleteAction={true}
                consultHandler={null}
                disableHandler={null}
                updateHandler={null}/>:
        <Redirect from="/profile" to="/login"/>;

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
                {usersTable}
                <AllModal 
                    modalBoolean={this.state.showModal}
                    showModal={this.modalHandler}
                    modalTitile={this.state.modalTitile}
                    createHandler={this.createHandler}
                    createBoolean={this.state.createBoolean}>
                        <UserProfileForm 
                        passwordHandler={null}
                        saveInformationHandler={null}
                        createForm={false}/>
                </AllModal>
            </Aux>
        );
    }
}

export default Users;