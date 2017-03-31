import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
  	console.log("hi");
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
    }).catch( (ex) => {
    });
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
}