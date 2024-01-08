import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.137:3000' // api casa
})

export default api
