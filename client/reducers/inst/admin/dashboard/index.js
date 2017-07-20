import utils from '../utils'

const dashboard = (state = {
    keyy: {
        unsolved: [],
        solved: [],
        all: []
    },
    mapp: {}
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

      default:
          return state
    }
}

export default dashboard
