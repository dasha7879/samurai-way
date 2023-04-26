import React from 'react';
import s from './Header.module.css'
import Header from './Header';
import axios from 'axios';
import { RootStateType } from '../../redux/reduxStore';
import { setUserData} from '../../redux/authReducer';
import { connect } from "react-redux";

type mapStateToPropsType = any
// {
//     isAuth:boolean
//     login: string| null
// }
type mapDispatchToPropsType = {
    setUserData: ( id: number | null, email: string | null, login: string | null) => void
}


class HeaderContainer extends React.Component<propsType>{
    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then((response) => {
                if(response.data.resultCode === 0 ){
                    let {id,email,login} = response.data.data
                   return this.props.setUserData(id,email,login)
                }
        });
    }
    
    render(){
    return <Header {...this.props}/>
    }
}


let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login: state.auth.login
})



export type propsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps,{setUserData})(HeaderContainer); 

//(HeaderContainer)