import { Category } from '../models'

module.exports = {
  getCategoryList
};

function getCategoryList(next) {
	Category.find({}, function(err, categories) {
		if (err) {
			next(null)
		} else {
			next(categories)
		}
	})
}