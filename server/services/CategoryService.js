import { Category } from '../models'

export const getCategoryList = (next) => {
	Category.find({}, function(err, categories) {
		if (err) {
			next(null)
		} else {
			next(categories)
		}
	})
};

// export const findCategoryByName = (name, next) => {
// 	Category.find({name: name}, function (err) {
// 		if (err) {
// 			next(null)
// 		} else {
// 			next(true)
// 		}
//     })
// }