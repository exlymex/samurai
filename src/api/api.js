import * as axios from 'axios'
const instance = axios.create({
    withCredentials:true,
    headers:{
        "API-KEY" :'0b63ea53-1b0c-4213-a886-4c3415ac3136'
    }
})
export const getUser = (currentPage = 1,pageSize = 10) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials:true
    }).then(response => response.data)
}