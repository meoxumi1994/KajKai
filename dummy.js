// Click on user

emit(
  'server/JOIN_CHAT',
  data: {
    id: '' //person id
  }
)

on(
  'client/LOAD_CHAT',
  data: {
    mesId: '',
    messages: [],
    user: {
      id: '',
      username: '',
      avatarUrl: ''
    }
  }
)


// on(
//   'client/RECEIVE_MESSAGE',
//   data: {
//     mesId: '',
//     time: '',
//   }
// )
