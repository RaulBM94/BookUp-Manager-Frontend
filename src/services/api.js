import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
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

async function createRestaurant(restaurant) {
  try {
    const { data } = await API.post('/restaurant', restaurant, {
      headers: {
        token: localStorage.getItem('token')
      },
    }

    )
    return data
  }
  catch (err) {
    return err
  }
}

//USERS
async function getUserById(client) {
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
  createRestaurant


}