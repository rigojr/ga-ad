import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import ProfileCard from '../../components/UI/Card/ProfileCard/ProfileCard';
import ProfileForm from '../../components/UI/Form/ProfileForm/ProfileForm';

class Profile extends Component {

    passwordOnChangeHanlder = () => {
        console.log("Changing Password");
    }

    userInformationOnChangeHandler = () => {
        console.log("Changing User Information");
    }

    render() {

        let profileComponente = this.props.isAuthed ?
            <ProfileCard>
                <ProfileForm
                    passwordHandler={this.passwordOnChangeHanlder}
                    saveInformationHandler={this.userInformationOnChangeHandler}
                    createForm={true}/>
            </ProfileCard> :
        <Redirect from="/profile" to="/login"/>;
        

        return (
            <Aux>
                {profileComponente}
            </Aux>
        )
    }

}

export default Profile;