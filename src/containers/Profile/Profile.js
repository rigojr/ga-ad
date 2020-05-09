import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';

class Profile extends Component {

    render() {

        let profileComponente = this.props.isAuthed ?
            <p>Test</p> :
        <Redirect from="/profile" to="/login"/>;
        

        return (
            <Aux>
                {profileComponente}
            </Aux>
        )
    }

}

export default Profile;