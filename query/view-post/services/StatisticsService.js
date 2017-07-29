import { Sellpost, BasicStore } from '../models'

export const getStatistics = (userId, storeId, from, to, next) => {
  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
    if (basicStore) {
      if (basicStore.userId == userId) {
        Sellpost.find({ storeId }, (err, sellposts) => {
          if (sellposts) {
            let result = []
            let resultByDate = {}

            for (let i = 0; i < sellposts.length; i++) {
              let sellpost = sellposts[i]
              let { comments } = sellpost
              if (!comments) {
                comments = []
              }
              for (let k = 0 ; k < comments.length; k++) {
                let comment = comments[k].replies[0]
                let { time } = comment
                let date = time.getDate()
                let month = time.getMonth()
                let year = time.getFullYear()
                time.setDate(date)
                time.setMonth(month)
                time.setFullYear(year)
                if (comment.userId != userId && comment.userId != storeId && from <= time && time <= to) {
                  let value = resultByDate[time]
                  resultByDate[time] = value ? value + 1 : 1
                }
              }
            }
            for (let d = from; d <= to; d.setDate(d.getDate() + 1)) {
              let value = resultByDate[d]
              result.push(value ? value : 0)
            }
            next({
              status: 'success',
              statistics: result
            })
          } else {
            if (err) {
              next({
                status: 'noData',
                statistics: []
              })
            } else {
              next({
                status: 'failed',
                statistics: []
              })
            }
          }
        })
      } else {
        next({
          status: 'failed',
          reason: 'The requester is not the store owner.'
        })
      }
    } else {
      next({
        status: 'noStoreData',
        statistics: []
      })
    }
  })
}
