import config from '../../config'
import 'whatwg-fetch'
// export const checkAuth = (type) => ({
//   type
// })


// export const sendMessage = (message) => ({
//     type: 'server/SEND_MESSAGE',
//     message
// })
//
// export const toggleMessage = (id) => ({
//   type: 'TOGGLE_MESSAGE',
//   id
// })
//
// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })
//
// export const loginResult = (type) => ({
//   type: type
// })
//
export const loggingIn = () => ({
  type: 'AUTH_ING'
})
// export const register = (username, password) => {
//
//   return dispatch => {
//
//       console.log(username + " register "+ password)
//     dispatch(loggingIn())
//
//     fetch(config.getDomain() + '/demo', {
//       headers: {
//         "Content-Type": "application/json"
//       },
//       method: 'POST',
//       credentials: 'same-origin',
//       body: JSON.stringify({
//         "username": username,
//         "password": password
//       })
//     })
//     .then((res) => {
//       res.json().then(json => {
//         dispatch(loginResult(json.type))
//       })
//     }, (err) => {
//       console.log('lỗi', err);
//       dispatch(loginResult('LOG_IN_FAILURE'))
//     })
//   }
// }
// config.getDomain() +
export const logIn = (loginID, password) => {
  return dispatch => {
    // dispatch(loggingIn())
    console.log(config.getDomain() + '/server/login')
    fetch( config.getDomain() + '/server/login', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        "loginID": loginID,
        "password": password
      })
    })
    .then((res) => {
        console.log(res)
        res.json().then(json => {
            if(config.ISTEST){
                console.log(json.type)
            }
        })
    }, (err) => {
      console.log('error', err + "dispatch(loginResult('LOG_IN_FAILURE'))"  );
    //   dispatch(loginResult('LOG_IN_FAILURE'))
    })
  }
}
