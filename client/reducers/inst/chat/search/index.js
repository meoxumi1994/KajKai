// const search = (state={
//     results: {
//         keyy: [],
//         mapp: {}
//     },
//     suggestions: {
//         keyy: [],
//         mapp: {}
//     },
//     display: false
// }, action) => {
//     switch (action.type) {
//         case 'SEARCH/ADD_SUGGESTIONS':
//
//             const tempMap2 = {}
//             action.data.users.map(user =>
//                 tempMap2[user.userId] = {
//                     id: user.userId,
//                     username: user.username,
//                     avatarUrl: user.avatarUrl
//                 }
//             )
//
//             return {
//                 ...state,
//                 suggestions: {
//                     keyy: action.data.users.map(user => user.userId),
//                     mapp: tempMap2
//                 }
//             }
//
//         case 'SEARCH/ADD_MEMBER':
//             return {
//                 ...state,
//                 results: {
//                     keyy: [
//                         ...state.results.keyy,
//                         action.data.user.id
//                     ],
//                     mapp: {
//                         ...state.results.mapp,
//                         [action.data.user.id]: action.data.user
//                     }
//                 }
//             }
//
//         case 'SEARCH/REMOVE_MEMBER':
//             const tempKey = state.results.keyy
//             const tempMap = state.results.mapp
//
//             tempKey.splice(tempKey.indexOf(action.data.id), 1)
//             delete tempMap[action.data.id]
//
//             return {
//                 ...state,
//                 results: {
//                     keyy: tempKey,
//                     mapp: tempMap
//                 }
//             }
//
//         case 'SEARCH/DISPLAY':
//             return {
//                 ...state,
//                 display: action.data.display == 'toggle'? !state.display: action.data.display
//             }
//
//         default:
//             return state
//     }
// }
//
// export default search
