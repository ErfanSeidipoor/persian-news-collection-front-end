import {
  getLatestNews,
  getNewsGreaterThan,
  getNewsLowerThan,
} from '../utils/api';

import {
    GETTING_NEWS_WAITING,
    GETTING_NEWS_FAILED,
    GETTING_NEWS_SUCCESS_INITIAL,
    GETTING_NEWS_SUCCESS_GREATER_THAN,
    GETTING_NEWS_SUCCESS_LOWER_THAN,
} from '../reducers/constants';

export const GetNewsInital = () => dispatch => {
  dispatch({ type: GETTING_NEWS_WAITING, })
  getLatestNews().then(
    res=>{
      dispatch({
        type: GETTING_NEWS_SUCCESS_INITIAL,
        payload: res.data,
      })
    },
    err=>{
      dispatch({ type: GETTING_NEWS_FAILED, })
    }
  )
}

export const GetNewsGreaterThan = (newsId) => dispatch => {
  dispatch({ type: GETTING_NEWS_WAITING, })
  getNewsGreaterThan(newsId).then(
    res=>{
      dispatch({
        type: GETTING_NEWS_SUCCESS_GREATER_THAN,
        payload: res.data,
      })
    },
    err=>{
      dispatch({ type: GETTING_NEWS_FAILED, })
    }
  )
}

export const GetNewsLowerThan = (newsId) => dispatch => {
  dispatch({ type: GETTING_NEWS_WAITING, })
  getNewsLowerThan(newsId).then(
    res=>{
      dispatch({
        type: GETTING_NEWS_SUCCESS_LOWER_THAN,
        payload: res.data,
      })
    },
    err=>{
      dispatch({ type: GETTING_NEWS_FAILED, })
    }
  )
}