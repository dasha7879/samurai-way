import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import { RouteComponentProps, withRouter } from "react-router-dom";



export type profileStateType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string,
        vk: string,
        twitter: string
        instagram: string
        youtube: null | string,
        github: string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string,
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
type mapStateToPropsType = {
    profile: profileStateType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileStateType) => void

}

type PathParamsType = {
    userId: string,
}



class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "2"
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);            
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

export type ProfileUsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileUsersPropsType 

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withURLdataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(withURLdataContainerComponent);