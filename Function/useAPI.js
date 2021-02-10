import FAPI from './API'
import Cookie from 'react-cookies'

const API = new FAPI(Cookie.load('utoken'));

export default API