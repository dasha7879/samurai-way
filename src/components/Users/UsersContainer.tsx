import { Dispatch } from "redux"
import { RootStateType } from "../../redux/reduxStore"
import { connect } from "react-redux"
import React from "react"
import axios from "axios"
import Users from "./Users"
import { Preloader } from "../common/Preloader/Preloader"
import { UserType, follow, initialStateType, setCurrentPage, setTotalUsersCount, setUsers, unFollow, setIsFetching } from "../../redux/usersReducer"




type mapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean

}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching : (isFetching: boolean) => void


}


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching (true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setIsFetching (false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then((response) => {

            this.props.setIsFetching(true)
            this.props.setUsers(response.data.items);
        });

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unFollow}
            />
        </>

    }
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {

    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer)

