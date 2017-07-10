// const singleChat = (state = {
//     messagesKey: [],
//     messagesMap: {},
// }, action) => {
//     switch (action.type) {
//
//         case 'INIT_SINGLE_MESSAGES':
//             const initSingleMessages = {
//               ...state,
//               messagesKey: [action.data.mesId],
//               messagesMap: {
//                   [action.data.mesId]: action.data.messages.reverse()
//               }
//             }
//             console.log('\n[Reducer Center] INIT_SINGLE_MESSAGES', action, initSingleMessages);
//             return initSingleMessages
//
//         case 'global/RECEIVE_MESSAGE':
//             const { mesId, user, time, message } = action.data
//             const chat = state.messagesMap[mesId]
//             if (chat == undefined || chat == null) {
//               return state
//             }
//             const msg = {
//               ...state,
//               messagesMap: {
//                 ...state.messagesMap,
//                 [mesId]: [
//                     ...state.messagesMap[mesId],
//                     {
//                         id: user.id,
//                         message,
//                         time
//                     }
//                 ]
//               }
//             }
//             console.log('\n[Reducer Center] global/RECEIVE_MESSAGE ', action, msg)
//             return msg
//
//
//         case 'ADD_CHAT':
//             if (action.data.mesId != 0) {
//               return state
//             }
//             return {
//               ...state,
//               messagesKey: ['0'],
//               messagesMap: {
//                 mesId: '0',
//                 messages: []
//               }
//             }
//
//         default:
//           return state
//     }
// }
//
// export default singleChat
