import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './admin-add-user.css';
import {  editUserFirstname
        , editUserLastname
        , editUserEmail
        , editUserPictureUrl
        , editUserDisplayName
        , editUserTeam
        , editUserRole
        } from '../../redux/reducers/main-reducer';
import {connect} from 'react-redux';


class EditUser extends Component {
    constructor() {
        super();

        this.state = {

        }
        this.submitUser = this.submitUser.bind(this);
    }


    submitUser() {
        console.log(this.props)
        let data = {
            user_firstname: this.props.user_firstname,
            user_lastname: this.props.user_lastname,
            user_email: this.props.user_email,
            user_picture: this.props.user_picture,
            user_display_name: this.props.user_display_name,
            user_team: this.props.user_team,
            user_role: this.props.user_role,
            // user_authid: this.props.user_authid
        }
        console.log(data)
    }

    render() {
       
        return (
            <div className="profile-modal">
                <div className="firstname">
                    <TextField onChange={(e) => this.props.editUserFirstname(e.target.value)} 
                    defaultValue=""
                    hintText="First Name" />
                </div>
                <div className="lastname">
                    <TextField onChange={(e) => this.props.editUserLastname(e.target.value)} 
                    defaultValue=""
                    hintText="Last Name" />
                </div>
                <div className="email">
                    <TextField  onChange={(e) => this.props.editUserEmail(e.target.value)}
                    hintText="Email"
                    defaultValue=""   
                     />
                </div>
                <div className="picture">
                    <TextField onChange={(e) => this.props.editUserPictureUrl(e.target.value)} 
                    defaultValue=""
                    hintText="Picture URL" />
                </div>
                <div className="display-name">
                    <TextField onChange={(e) => this.props.editUserDisplayName(e.target.value)}
                    hintText="Display Name"
                    defaultValue="" />
                </div>
                <div className="company">
                    <TextField  disabled={true} hintText="Your Company" />
                </div>
                <div className="team">
                    <TextField onChange={(e) => this.props.editUserTeam(e.target.value)} 
                    defaultValue=""
                    hintText="Team" />
                </div>
                <div className="role">
                    <TextField disabled={true} hintText="Role" />
                </div>
                <button onClick={() => this.submitUser()}>Save Changes</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {editUserFirstname, editUserLastname
    , editUserEmail
    , editUserPictureUrl
    , editUserDisplayName
    , editUserTeam
    , editUserRole})(EditUser)