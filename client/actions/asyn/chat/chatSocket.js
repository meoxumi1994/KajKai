import { flet, flem } from '~/actions/support'

export const sendMessage = (msg) => dispatch => {
  flet('/getchatid',{
      person: msg.receiver
  },{

  })
  .then((response) => {
      const obj = Object.assign({}, msg, {id: response.id});
      dispatch({type:"server/SEND_MESSAGE", obj})
  })
}
