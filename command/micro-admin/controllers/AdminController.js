import { getAdmin, getAdminToken, getUsers, getFeedbacks, banUser, createFeedback } from '../services/AdminService'
import { getOwnerFromPostId } from './AdminPubController'

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
  let { feedbackId, status, adminId, defendantId: userId, reason } = req.body
  let banned = status ? 1 : 0
  banUser(feedbackId, banned, adminId, userId, reason, (result) => {
    res.json({
      result,
      feedbackId,
      status,
      adminId,
      defendantId: userId,
      reason,
      time: Date.now()
    })
  })
}

export const createFeedbackHandler = () => (req, res) => {
  const { sellpostId, content } = req.body
  const userId = req.decoded._id

  getOwnerFromPostId(sellpostId, (ownerId) => {
    if (ownerId) {
      createFeedback(userId, ownerId, content, sellpostId, (status) => {
        res.json({ status })
      })
    } else {
      res.json({
        status: 'failed'
      })
    }
  })


}
