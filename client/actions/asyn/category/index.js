import { flem } from '~/actions/support'

export const loadCategory = () => dispatch => {
  flem('/categorylist').then((response) => {
    const { categories } = response
    dispatch({
      type: 'LOADED_CATEGORY',
      categories
    })
  })
}
