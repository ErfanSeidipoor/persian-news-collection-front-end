import axios from 'axios';

import { GET_NEWS, HEADER} from './urls';

export const getLatestNews = () => {
  const parameters = {
    url: GET_NEWS,
    method: 'post',
    ...HEADER,
    data: { "limit":20,}
  }
  return axios(parameters)
}

export const getNewsGreaterThan = (newsId) =>{
  const parameters = {
    url: GET_NEWS,
    method: 'post',
    ...HEADER,
    data: { "limit":20, "greaterThan":newsId}
  }
  return axios(parameters)
}

export const getNewsLowerThan = (newsId)=>{
  const parameters = {
    url: GET_NEWS,
    method: 'post',
    ...HEADER,
    data: { "limit":20, "lowerThan":newsId}
  }
  return axios(parameters)
}