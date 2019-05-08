import axios from './axios'

export const baseUrl = process.env.NODE_ENV == 'development' ? 'http://192.168.1.240:8090/' : 'https://api.litudai.com/';
console.log('process', process.env.NODE_ENV, baseUrl)
let instance = axios()
export default {
  get (url, params, headers) {
    let options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.get(baseUrl + url, options)
  },
  post (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.post(baseUrl + url, params, options)
  },
  put  (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.put(baseUrl + url, params, options)
  },
  delete (url, params, headers) {
    let options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.delete(baseUrl + url, options)
  }
}