import axios from "axios"

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: { 'API-KEY': '415c69a8-c6d6-4cde-974a-22c684cf41ff' }
    }

)
export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const follow = (userId:number) => {
  return   instance.delete(`follow/${userId}`).then(response => response.data)
}
export const unFollow = (userId:number) => {
  return   instance.post(`follow/${userId}`).then(response => response.data)
}
