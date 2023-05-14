import axios, { AxiosResponse } from "axios"

const instance = axios.create(
  {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '415c69a8-c6d6-4cde-974a-22c684cf41ff' }
  }

)

type usersAPIType = {
  getUsers: (currentPage: number, pageSize: number) => any
  follow: (userId: number) => any
  unFollow: (userId: number) => any
  getProfile: (userId: number) => any
};
type authAPIType = {
 me:()=>any
};

export const usersAPI: usersAPIType = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  follow(userId: number) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },
  unFollow(userId: number) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  },
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  }

}

export const authAPI: authAPIType = {
  me() {
    return instance.get('auth/me').then(response =>response.data)
  }

}