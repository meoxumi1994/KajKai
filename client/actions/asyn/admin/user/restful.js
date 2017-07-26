import { flem, flet } from '../../../support'

export const getUsers = () => dispatch => {
    flem('/users', {

    }, {}
    ).then((response) => {
          if (response != undefined && response.status == 'success') {
              dispatch({type: 'ADMIN/USER/INIT_USERS', data: response.data})
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
                    dispatch({type: 'ADMIN/USER/DISPLAY', data: { display: false, id: '' }})
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
