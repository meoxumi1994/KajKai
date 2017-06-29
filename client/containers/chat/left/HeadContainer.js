import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'

const mapStateToProps = (state, ownProps) => {
  // console.log('---STATE ', state);
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewChat: () => {
        dispatch({type: 'NEW_CHAT'})
    }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer

// const abc = {
//     lastMessage: {
//       id: "593234a11c75513e381e5c87",
//       time: Date.now() - 1523000,
//       message: {
//         text: "fuck u",
//         type: "msg",
//         url: ""
//       }
//     },
//     mesId: "593e4c1a2688d830be26fc66",
//     displayLabel: "",
//     users: [
//       {
//         avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg",
//         id: "593234a11c75513e381e5c87",
//         username: "Long FU"
//       }
//     ]
// }
