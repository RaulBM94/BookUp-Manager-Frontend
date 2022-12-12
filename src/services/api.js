import axios from 'axios'

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
async function getUserById(client){
  const res = await API.get("/", {
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      client
    }
  })
  return res
}

export default {
    signup,
    login,
    getUserById,


}