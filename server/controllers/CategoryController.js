import { getCategoryList } from '../services/CategoryService.js'

export const getCategory = () => {
    return (req, res) => {
        getCategoryList(function (categories) {
            if (categories) {
                res.send({categories: categories, status: 'success'})
            } else {
                res.send({status: 'failed'})
            }
        })
    }
}