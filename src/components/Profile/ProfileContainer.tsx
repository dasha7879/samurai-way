import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";



// export type profileStateType = {
//     aboutMe: string
//     contacts: {
//         facebook: string
//         website: null | string,
//         vk: string,
//         twitter: string
//         instagram: string
//         youtube: null | string,
//         github: string
//         mainLink: null | string
//     },
//     lookingForAJob: boolean
//     lookingForAJobDescription: string,
//     fullName: string
//     userId: number
//     photos: {
//         small: string
//         large: string
//     }
// }
type mapStateToPropsType = {
    profile: any
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void

}

class ProfileContainer extends React.Component<ProfileUsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data);

        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

export type ProfileUsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);