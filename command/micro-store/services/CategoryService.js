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
            name: lists[i].name,
            enName: lists[i].enName
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
            enName: lists[i].enName,
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
    console.log(idParent, idChild);
    Category.findById(idParent, (err, docs) => {
        console.log('category ', err, docs);
        let parentName = docs.name;
        let childName = '';
        for (let i = 0; i < docs.subcategory.length; ++i) {
            console.log('fuck shit ', docs.subcategory[i], idChild);
            if (docs.subcategory[i]._id.toString() === idChild) {
                childName = docs.subcategory[i].name;
            }
        }
        next({parentName, childName});
    })
};