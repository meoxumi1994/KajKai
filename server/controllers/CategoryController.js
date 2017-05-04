import CategoryService from '../services/CategoryService.js'

export const getCategory = () => {
	return (req, res) => {
		CategoryService.getCategoryList(function(categories){
			if (categories) {
				res.send({categories: categories, status: 'success'})
			} else {
				res.send({status: 'failed'})
			}
		})
	}
}