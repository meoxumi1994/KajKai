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
      case 'ADMIN/DASHBOARD/INIT_FEEDBACK':
          const { id, reporter, defendant, decision, status, time } = action.data
          return {
              id,
              reporter,
              defendant,
              decision,
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


      default:
          return state
    }
}

export default feedbackMap
