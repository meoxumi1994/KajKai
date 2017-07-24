import { getAdmin, getAdminToken, getUsers, getFeedbacks, banUser } from '../services/AdminService'

export const loginAdmin = () => (req, res) => {
  const { adminName, password } = req.body

  getAdmin(adminName, password, (admin) => {
    if (admin) {
      const token = getAdminToken(admin._id)
      res.cookie('token', token)
      res.json({
        status: 'success',
        admin: {
          id: admin._id,
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
      res.json(users)
    })
  }
}

export const getFeedbacksHandler = () => (req, res) => {
  const { offset, length } = req.query
  const requesterId = req.decoded._id

  if (requesterId == 'Guest') {
    res.json({
      status: 'failed'
    })
  } else {
    getFeedbacks(offset, length, (feedbacks) => {
      res.json(feedbacks)
    })
  }
}

export const banUserHandler = () => (req, res) => {
  let { status, adminId, defendantId: userId, reason } = req.body
  let banned = status ? 1 : 0
  banUser(banned, adminId, userId, reason, (result) => {
    res.json({
      result,
      status,
      adminId,
      defendantId: userId,
      reason,
      time: Date.now()
    })
  })
}

export const createFeedbackHandler = () => (req, res) => {
  const { storeId, sellpostId, content, ownerId } = req.body
  const userId = req.decoded._id

  createFeedback(userId, ownerId, content, )


}
