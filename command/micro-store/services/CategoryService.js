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

export const getSubListCategoryInfo = (lists) => {
    let res = [];
    for (let i = 0; i < lists.length; ++i) {
        res.push({
            id: lists[i]._id,
            name: lists[i].name
        })
    }
    return res;
};

export const getListCategoryInfo = (lists) => {
    let res = [];
    for (let i = 0; i < lists.length; ++i) {
        res.push({
            id: lists[i]._id,
            name: lists[i].name,
            secondCategories: getSubListCategoryInfo(lists[i].subcategory)
        })
    }
    return res;
};

export const searchCategory = (str, next) => {
    Category.find({$text: {$search: str}}, (err, list) => {
        if (err) next([]);
        else next(list);
    });
};