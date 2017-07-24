import utils from '../utils'

const dashboard = (state = {
    keyy: {
        unsolved: [],
        solved: [],
        all: []
    },
    mapp: {},
    current: {
        display: false,
        id: ''
    }
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
                  id: action.data.id
              }
          }
      default:
          return state
    }
}

export default dashboard
