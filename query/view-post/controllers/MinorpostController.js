import { getMinorposts, getMinorpostContent } from '../services/MinorpostService.js'

export const getMinorpostsHandler = () => (req, res) => {
  if (req.decoded) {
    const { storeid: storeId } = req.params
    const { offset } = req.query
    getMinorposts(storeId, offset ? offset : Date.now(), (minorposts) => {
      if (minorposts) {
        res.json(minorposts)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}

export const getMinorpostContentHandler = () => (req, res) => {
  if (req.decoded) {
    const { minorpostid: id } = req.params
    getMinorpostContent(id, (content) => {
      if (content) {
        res.json(content)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
