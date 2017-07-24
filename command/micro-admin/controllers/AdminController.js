import { getAdmin, getAdminToken, getUsers } from '../services/AdminService'

export const loginAdmin = () => (req, res) => {
  const { adminName, password } = req.body

  getAdmin(adminName, password, (admin) => {
    if (admin) {
      const token = getAdminToken(admin._id)
      res.cookie('token', token)
      res.json({
        status: 'success',
        admin: {
          adminName: admin.adminName
        }
      })
    } else {
      res.json({ status: 'failed'})
    }
  })
}

export const getUsersHandler = () => (req, res) => {
  const { offset, length } = req.query
  const requesterId = req.decoded._id

  if (requesterId == 'Guest') {
    res.json({
      status: 'failed'
    })
  } else {
    getUsers(offset, length, (users) => {
      res.json({
        status: 'success',
        data: users
      })
    })
  }
}
