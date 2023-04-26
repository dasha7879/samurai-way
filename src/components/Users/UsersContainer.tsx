import { RootStateType } from "../../redux/reduxStore"
import { connect } from "react-redux"
import React from "react"
import axios from "axios"
import Users from "./Users"
import { Preloader } from "../common/Preloader/Preloader"
import { UserType, follow, initialStateType, setCurrentPage, setTotalUsersCount, setUsers, unFollow, setIsFetching } from "../../redux/usersReducer"
import { getUsers } from "../../api/api"




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
        getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize).then((data) => {
            this.props.setIsFetching (false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber,this.props.usersPage.pageSize).then((data) => {
            this.props.setIsFetching(true)
            this.props.setUsers(data.items);
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

