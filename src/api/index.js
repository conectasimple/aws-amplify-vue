import axios from 'axios'
import config from '../config'

export default {
  async  getHistory (dispositivo) {
    return axios({
      url: config.serverURI + '/v2/historical/devices?type=' + dispositivo,
      method: 'get'
    })
  },
}
