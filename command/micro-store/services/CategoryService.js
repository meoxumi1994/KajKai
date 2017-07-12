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

export const getCategoryName = (idParent, idChild, next) => {
    Category.findById(idParent, (err, docs) => {
        let parentName = docs.name;
        let childName = '';
        for (let i = 0; i < docs.subcategory.length; ++i) {
            if (docs.subcategory[i]._id === idChild) {
                childName = docs.subcategory[i].name;
            }
        }
        next({parentName, childName});
    })
};