import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://api-bookup.onrender.com/api'
})

async function signup(newUser) {
  try {
    const { data } = await API.post('/auth/signup', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function login(newUser) {
  try {
    const { data } = await API.post('/auth/login', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

//USERS
async function getUserById(id){
  const store = useAuthStore()
  const res = await API.get(`/${id}`, {
    headers:{
      Authorization:`Bearer ${store.userToken}`
    }
  })
  return res
}

async function createUser(){
  const store = useAuthStore()
  const res = await API.post('/', {
    user: store.userId,
    ...user 
  },{ 
    headers:{
      Authorization:`Bearer ${store.userToken}`
    }
  })
  return res
}

async function deleteUserById(id){
    const store = useAuthStore()
    const res = await API.delete(`/${id}`, {
      headers:{
        Authorization:`Bearer ${store.userToken}`
      }
    })
    return res
  }

export default {
    signup,
    login,
    getUserById,
    createUser,
    deleteUserById

}