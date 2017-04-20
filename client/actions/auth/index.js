

export const checkAuth = (type) => ({
  type
})


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
// export const loggingIn = (username) => ({
//   type: 'LOGGING_IN',
//   username
// })
//
// export const logIn = (username, password) => {
//
//   return dispatch => {
//
//     dispatch(loggingIn(username))
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
