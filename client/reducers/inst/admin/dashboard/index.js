import utils from '../utils'
import feedbackMap from './feedbackMap'

const dashboard = (state = {
    keyy: {
        unsolved: [],
        solved: [],
        all: []
    },
    mapp: {},
    display: {
        details: false,
        loadMore: true
    },    
    details: undefined
}, action) => {
    switch (action.type) {

      case 'ADMIN/DASHBOARD/INIT_FEEDBACK':
          const unsolved = state.keyy.unsolved
          const solved = state.keyy.solved
          const all = state.keyy.all

          for (let i in action.data) {
              const feedback = action.data[i]
              if (feedback.status) {
                  if (solved.indexOf(feedback.id) == -1) {
                      solved.push(feedback.id)
                  }
              } else {
                if (unsolved.indexOf(feedback.id) == -1) {
                    unsolved.push(feedback.id)
                }
              }
              if (all.indexOf(feedback.id) == -1) {
                  all.push(feedback.id)
              }
          }

          return {
              ...state,
              keyy: {
                  unsolved,
                  solved,
                  all
              },
              mapp: {
                  ...state.mapp,
                  ...utils.getFeedbacksMap(action)
              }

          }

      case 'ADMIN/DASHBOARD/DISPLAY':
          console.log('action', action);
          switch (action.subType) {
            case 'FEEDBACK_DETAILS':
                return {
                    ...state,
                    display: {
                        ...state.display,
                        details: action.data.display,
                    }
                }
            case 'LOAD_MORE':
                return {
                    ...state,
                    display: {
                        ...state.display,
                        loadMore: action.data.display
                    }
                }
            default:
                return state
          }


      case 'ADMIN/DASHBOARD/INIT_DETAILS':
          return {
              ...state,
              details: feedbackMap(undefined, action),
              display: {
                  ...state.display,
                  details: true,
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
