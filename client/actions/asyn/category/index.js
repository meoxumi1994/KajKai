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
<<<<<<< HEAD
    //   alert('LOAD CATEGORY FAILED! response: ', response)
=======
      // alert('LOAD CATEGORY FAILED!')
>>>>>>> 7d09ea05ef25e0efba51f7f89988499dc42c2dab
      dispatch({
        type: 'My name is Charity'
      })
    }
  })
}
