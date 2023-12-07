import axios from 'axios'

export const $auth = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  withCredentials: true
})

export const $search = axios.create({
  baseURL: 'http://localhost:5000/api/users',
  withCredentials: true
})