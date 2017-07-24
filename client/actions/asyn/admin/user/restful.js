import { flem, flet } from '../../../support'

export const getUsers = () => dispatch => {
    flem('/users', {

    }, {}
    ).then((response) => {
          const { status, data } = response
          if (status) {
              dispatch({type: 'ADMIN/USER/INIT_USERS', data: data})
          }
    })
}

export const banUser = (status, adminId, defendantId, reason) => dispatch => {
    flet('/ban',{
        status,
        adminId,
        defendantId,
        reason,
        time: Date.now()
    })
    .then((response) => {
          console.log('response', response);
          if (response.result == "success") {
              dispatch({type: 'ADMIN/USER/BAN', data: {adminId: response.adminId, defendantId: response.defendantId, reason: response.reason, status: response.status, time: response.time}})
          }
    })
}
