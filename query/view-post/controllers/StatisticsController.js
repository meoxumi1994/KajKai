import { getStatistics } from '../services/StatisticsService'

export const getStatisticsHandler = () => (req, res) => {
  let { storeid: storeId } = req.params
  let userId = req.decoded._id
  let { from, to } = req.query
  console.log('from: ', from);
  console.log('to: ', to);
  from = new Date(from)
  to = new Date(to)
  getStatistics(userId, storeId, from, to, (statistics) => {
    res.json(statistics)
  })
}
