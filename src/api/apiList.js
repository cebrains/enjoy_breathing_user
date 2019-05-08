import api from './index'


export default {
  test (params) {
    return api.get('test', params)
  }
}