import { apiGetAllCategories } from '../utils/api'
import { GET_ALL_CATEGORIES } from './actionTypes'

export function recieveAllCategories (categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export const getAllCategories = () => dispatch => (
  apiGetAllCategories()
    .then(categories => dispatch(recieveAllCategories(categories)))
);
