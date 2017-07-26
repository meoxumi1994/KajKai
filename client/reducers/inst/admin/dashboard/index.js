import utils from '../utils'
import feedbackMap from './feedbackMap'

const dashboard = (state = {
    keyy: {
        unsolved: [],
        solved: [],
        all: []
    },
    mapp: {},
    current: {
        display: false,
    },
    details: undefined
}, action) => {
    switch (action.type) {

      case 'ADMIN/DASHBOARD/INIT_FEEDBACK':
          const unsolved = []
          const solved = []
          const all = []

          action.data.map(
              feedback => {
                  feedback.status? solved.push(feedback.id): unsolved.push(feedback.id)
                  all.push(feedback.id)
              }
          )

          return {
              ...state,
              keyy: {
                  unsolved,
                  solved,
                  all
              },
              mapp: utils.getFeedbacksMap(action)
          }

      case 'ADMIN/DASHBOARD/CURRENT':
          return {
              ...state,
              current: {
                  display: action.data.display,
              }
          }

      case 'ADMIN/DASHBOARD/INIT_DETAILS':
          return {
              ...state,
              details: feedbackMap(undefined, action),
              current: {
                  ...state.current,
                  display: true
              }
          }

      case 'ADMIN/DASHBOARD/UPDATE_FEEDBACK_USER':
          return {
              ...state,
              details: feedbackMap(state.details, action)
          }

      case 'ADMIN/FEEDBACK/UPDATE_STATUS':

          const unsolvedList = state.keyy.unsolved
          const solvedList = state.keyy.solved

          // console.log('before', unsolvedList, solvedList);

          unsolvedList.splice(unsolvedList.indexOf(action.data.feedback.id), 1)
          solvedList.push(action.data.feedback.id)
          // console.log('after', unsolvedList, solvedList);

          return {
              ...state,
              keyy: {
                  ...state.keyy,
                  unsolved: unsolvedList,
                  solved: solvedList
              },
              mapp: {
                ...state.mapp,
                [action.data.feedback.id]: feedbackMap(state.mapp[action.data.feedback.id], action)
              }
          }

      default:
          return state
    }
}

export default dashboard
