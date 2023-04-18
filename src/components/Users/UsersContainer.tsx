import { Dispatch } from "redux"
import { RootStateType } from "../../redux/reduxStore"
import { connect } from "react-redux"
import { UserType, followAC, initialStateType, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/usersReducer"
import React from "react"
import axios from "axios"
import Users from "./Users"




type mapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    
    
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
   
}


class UsersCpontainer extends React.Component<UsersPropsType> {
    componentDidMount() {
      if (this.props.usersPage.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
      }
    }
  
    onPageChanged = (pageNumber: number) =>{
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then((response) => {
        console.log(response.data.items)
        this.props.setUsers(response.data.items);
      });
  
    }
  
    render() {
      return <Users
        usersPage={this.props.usersPage}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow} 
        // setUsers={this.props.setUsers} 
        // setCurrentPage={this.props.setCurrentPage}  
        // setTotalUsersCount={this.props.setTotalUsersCount}  
           />
    }
  }

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType 

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {

    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        

    }

}

export default connect(mapStateToProps, mapDispatchToProps)( UsersCpontainer)