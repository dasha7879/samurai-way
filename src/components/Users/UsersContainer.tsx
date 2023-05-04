import { RootStateType } from "../../redux/reduxStore"
import { connect } from "react-redux"
import React from "react"
import Users from "./Users"
import { Preloader } from "../common/Preloader/Preloader"
import { follow, initialStateType, setCurrentPage, unfollow, getUsers } from "../../redux/usersReducer"




type mapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingProgress: number[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
        this.props.setCurrentPage(pageNumber)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingProgress={this.props.followingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
})(UsersContainer)

