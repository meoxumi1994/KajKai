import { flet, flem } from '../../../support'

export const loginAdmin = (adminName, password) => dispatch => {
    flet('/loginadmin',{
        adminName,
        password
    })
    .then((response) => {
          if (response.status == 'success') {
              const { adminName, id } = response.admin
              dispatch({type: 'ADMIN/AUTH', data: {status: true, adminName, id}})
          }
    })
}

export const auth = () => dispatch => {
    flem('/admin',{

    })
    .then((response) => {
          console.log('[API] /admin', response);
          if ( response != undefined && response.status == 'success') {
              const { adminName, id } = response.admin
              dispatch({type: 'ADMIN/AUTH', data: {status: true, adminName, id}})
          }
    })
}

export const logout = () => dispatch => {
    flem('/logout',{

    })
    .then((response) => {
          console.log('[API] /logout', response);
          if ( response != undefined && response.status == 'success') {
              dispatch({type: 'ADMIN/AUTH', data: {status: false, adminName: undefined, id: undefined}})
          }
    })
}
