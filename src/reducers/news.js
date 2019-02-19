

import  {
  GETTING_NEWS_WAITING,
  GETTING_NEWS_FAILED,
  GETTING_NEWS_SUCCESS_INITIAL,
  GETTING_NEWS_SUCCESS_GREATER_THAN,
  GETTING_NEWS_SUCCESS_LOWER_THAN,
} from "./constants";


const initialState = {
  wait: false,
  success: false,
  fail: false,
  newsList: [],
  min: 0,
  max: 0,
}

const getMinMaxNewsId =  newsList =>{
  let min = Math.min(); //  Infinity ??
  let max = Math.max(); // -Infinity ??
  newsList.forEach( news => {
    if (min>news.newsId) {
      min = news.newsId;
    }
    if (max<news.newsId) {
      max = news.newsId;
    }
  });
  return ({min,max})
}

export default (state = initialState, action) => {
  let newsList = [];
  switch (action.type) {
    case GETTING_NEWS_WAITING:
      return {
        ...state,
        wait: true,
        success: false,
        fail: false,
      }
    case GETTING_NEWS_FAILED:
      return {
        ...state,
        wait: false,
        success: false,
        fail: true,
      }
    case GETTING_NEWS_SUCCESS_INITIAL:
      return {
        ...initialState,
        success: true,
        newsList: action.payload,
        ...getMinMaxNewsId(action.payload)
      }
    case GETTING_NEWS_SUCCESS_GREATER_THAN:
      newsList = [...action.payload,...state.newsList,];
      return {
        ...initialState,
        success: true,
        newsList,
        ...getMinMaxNewsId(newsList),
      }
    case GETTING_NEWS_SUCCESS_LOWER_THAN:
      newsList = [...state.newsList,...action.payload,];
      return {
        ...initialState,
        success: true,
        newsList,
        ...getMinMaxNewsId(action.payload),
      }
    default:
    return state
  }
}