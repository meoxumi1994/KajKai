import { flem } from '~/actions/support'

export const loadCategory = () => dispatch => {
  flem('/categorylist').then((response) => {
    const { categories } = response
    if (status == 'success') {
      dispatch({
        type: 'LOADED_CATEGORY',
        categories
      })
    } else {
      dispatch({
        type: 'My name is Charity'
      })
    }
  })
}
