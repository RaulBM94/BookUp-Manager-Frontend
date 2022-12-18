import axios from 'axios'

const API = axios.create({
  baseURL: 'https://bookupmanagerapi.onrender.com/api'
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

//RESTAURANT
async function getRestaurant(){
  try {
    const { data } = await API.get('/restaurant', {
      headers: {
        token_value: localStorage.getItem('token_value')
      }
    })
    return data
  }
  catch (err) {
    return err
  }
}  
async function createRestaurant(restaurant) {
  try {
    const { data } = await API.post('/restaurant', restaurant, {
      headers: {
        token_value: localStorage.getItem('token_value')
      },
    })
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
      token_value: localStorage.getItem('token_value')
    },
    params: {
      client
    }
  })
  return res
}
//RESERVATIONS
async function createReservation(reservation){
  try {
    const { data } = await API.post('/reservation', reservation, {
      headers: {
        token_value:localStorage.getItem('token_value')
      },
    })
    return data
  }
  catch (err) {
    return err
  }
}

async function searchReservation(search){
  try {
    const { data } = await API.get('/reservation', {
      headers: {
        token_value:localStorage.getItem('token_value')
      },
      params:{
        search: search
      }
    })
    return data
  }
  catch (err) {
    return err
  }
}

async function sendReminder(reminder){
try{
  const {data} = await API.post('/emailer',reminder, {
    headers: {
      token_value:localStorage.getItem('token_value')
    }
  })
  return data
}
catch (err) {
  return err
}
}

export default {
  signup,
  login,
  getUserById,
  createRestaurant,
  getRestaurant,
  createReservation,
  searchReservation,
  sendReminder
}