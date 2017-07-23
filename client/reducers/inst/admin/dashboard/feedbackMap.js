const feedbackMap = (state={
    reporter: {},
    defendant: {},
    reason: '',
    time: '',
    status: ''
}, action) => {
    switch (action.type) {
      case 'ADMIN/DASHBOARD/INIT_FEEDBACK':
          const {  reporter, defendant, reason, time, status } = action.data
          return {
              ...state,
              reporter: reporter,
              defendant: defendant,
              reason,
              time,
              status,
          }
      default:
          return state
    }
}

export default feedbackMap
