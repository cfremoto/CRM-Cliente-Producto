import axios from 'axios'

const ClienteAxios = axios.create({
  baseURL: 'http://localhost:3005/api'
})

export default ClienteAxios
