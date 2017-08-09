import { flem } from '~/actions/support'

export const loadCategory = () => dispatch => {
    dispatch({ type: 'GET_CATEGORY_ING' })
  flem('/categorylist')
  .then(({ categories, status }) => {
    if(status == 'success')
        dispatch({ type: 'GET_CATEGORY_SUCCESS', categories })
    else dispatch({ type: 'GET_CATEGORY_FAILED', categories })
  })
}
