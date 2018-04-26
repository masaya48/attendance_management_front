import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000'
})

export default (Vue, { store }) => {
  client.interceptors.request.use((config) => {
    return config
  }, (error) => {
    // TODO intercept something
    return Promise.reject(error)
  })

  client.interceptors.response.use((response) => {
    // TODO intercept something
    return response.data
  }, (error) => {
    // TODO intercept something
    return Promise.reject(error)
  })

  Vue.http = Vue.prototype.$http = client
}
