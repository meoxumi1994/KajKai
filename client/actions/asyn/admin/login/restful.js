import { flet } from '../../../support'

export const loginAdmin = (adminName, password) => dispatch => {
    flet('/loginadmin',{
        adminName,
        password
    })
    .then((response) => {
          if (response.status == 'success') {
              const { adminName, id } = response.admin
              console.log('adminId', id);
              dispatch({type: 'ADMIN/AUTH', data: {status: true, adminName, id}})
          }
    })
}
