import { getCategoryList } from '../services/CategoryService.js'

export const getCategory = () => {
    return (req, res) => {
        getCategoryList(function (categories) {
            if (categories) {
                res.json({categories: categories, status: 'success'})
            } else {
                res.json({status: 'failed'})
            }
        })
    }
}