import { flem, flet } from '../../../support'

export const getUsers = (offset) => dispatch => {
    const length = 10
    flem('/users', {
      offset: offset,
      length: length
    }, {}
    ).then((response) => {
          if (response != undefined && response.status == 'success') {
              if (response.data.length > 0) {
                  dispatch({type: 'ADMIN/USER/INIT_USERS', data: response.data})
              } else {
                  dispatch({type: 'ADMIN/USER/DISPLAY', subType: 'LOAD_MORE', data: { display: false, id: undefined }})
              }
          }
    })
}

export const banUser = (type, adminId, reason, feedbackId, feedbackStatus, reporter, defendant) => dispatch => {
    flet('/ban',{
        admin: {
            id: adminId,
            reason: reason,
            time: Date.now()
        },
        feedback: {
            id: feedbackId,
            status: feedbackStatus
        },
        reporter: reporter,
        defendant: defendant
    })
    .then((response) => {
          console.log('[API] /banUser', response);
          if (response != undefined && response.status == "success") {
                const { admin, feedback, reporter, defendant} = response.data

                if (type == 'user') {
                    dispatch({type: 'ADMIN/USER/DISPLAY', subType: 'USER_DETAILS', data: { display: false, id: '' }})
                } else {
                    dispatch({
                      type: 'ADMIN/USER/BAN',
                      data: {
                          adminId: admin.id,
                          defendantId: reporter.id,
                          status: reporter.status,
                          reason: admin.reason,
                          time: admin.time,
                      }})
                      dispatch({
                        type: 'ADMIN/FEEDBACK/UPDATE_STATUS',
                        data: {
                            feedback: feedback,
                            admin: admin
                        }
                      })
                      dispatch({ type: 'ADMIN/DASHBOARD/DISPLAY', subType: 'FEEDBACK_DETAILS', data: {display: false}})
                }

                dispatch({
                  type: 'ADMIN/USER/BAN',
                  data: {
                      adminId: admin.id,
                      defendantId: defendant.id,
                      status: defendant.status,
                      reason: admin.reason,
                      time: admin.time,
                  }})
          }
    })
}
