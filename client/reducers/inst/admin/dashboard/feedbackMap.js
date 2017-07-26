const feedbackMap = (state={
      id: '',
      reporter: {
          user: {
              id: '',
              username: '',
              avatarUrl: ''
          },
          content: '',
          ban: {
              status: ''
          }
      },
      defendant: {
          user: {
              id: '',
              username: '',
              avatarUrl: '',
          },
          sellpostId: '',
          ban: {
              status: ''
          }
      },
      decision: '',
      status: '',
      time: '',
}, action) => {
    switch (action.type) {

      case 'ADMIN/DASHBOARD/INIT_DETAILS':
          return {
              ...state,
              id: action.data.id,
              reporter: action.data.reporter,
              defendant: action.data.defendant,
              decision: action.data.reason,
              status: action.data.status,
              time: action.data.time
          }


      case 'ADMIN/DASHBOARD/INIT_FEEDBACK':
          const { id, reporter, defendant, reason, status, time } = action.data
          return {
              id,
              reporter,
              defendant,
              decision: reason,
              status,
              time
          }

      case 'ADMIN/DASHBOARD/UPDATE_FEEDBACK_USER':
          if (action.data.type == 'reporter') {
              return {
                  ...state,
                  reporter: {
                      ...state.reporter,
                      ban: {
                          ...state.reporter.ban,
                          status: action.data.status
                      }
                  }
              }
          } else {
            return {
                ...state,
                defendant: {
                    ...state.defendant,
                    ban: {
                        ...state.defendant.ban,
                        status: action.data.status
                    }
                }
            }
          }

      case 'ADMIN/FEEDBACK/UPDATE_STATUS':
          return {
              ...state,
              status: action.data.feedback.status,
              time: action.data.admin.time
          }

      default:
          return state
    }
}

export default feedbackMap
