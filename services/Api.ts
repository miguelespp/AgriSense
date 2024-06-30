import axios from 'axios'

// Es la conexion con el backend

export const Api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})