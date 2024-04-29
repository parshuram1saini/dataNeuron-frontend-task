import applyConverters from 'axios-case-converter'
import axios from 'axios'
import { API_BASE_URL } from '../config'

export default applyConverters(
  axios.create({
    baseURL: API_BASE_URL,
    responseType: 'json',
    maxContentLength: 'Infinity',
  }),
)
