import * as axios from 'axios'
const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY" :'0b63ea53-1b0c-4213-a886-4c3415ac3136'
    }
})

export const usersAPI = {
    getUser(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postFollow(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
      return instance.get(`profile/${userId}`)
          .then(response => {
              return response.data
          })
    },
    getAuthMe(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

