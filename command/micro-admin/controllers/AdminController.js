import { getAdmin, getAdminById, getAdminToken, getUsers, getFeedbacks, banUsers, createFeedback, getFeedback } from '../services/AdminService'
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

export const getAdminHandler = () = (req, res) => {
  const requestedId = req.decoded._id
  getAdminById(requestedId, (admin) => {
    res.json(admin)
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
  const { admin, feedback, reporter, defendant: reportee } = req.body
  banUsers(admin, feedback, reporter, reportee, (status) => {
    res.json({
      status,
      data: req.body
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

export const getFeedbackHandler = () => (req, res) => {
  const { id } = req.params
  getFeedback(id, (feedback) => {
    res.json(feedback)
  })
}
