import { getCategoryList, getListCategoryInfo, searchCategory } from '../services/CategoryService'

export const getCategoryListCon = () => {
    return (req, res) => {
        getCategoryList((list) => {
            if (list && list.length > 0) {
                res.json({categories: getListCategoryInfo(list), status: 'success'});
            } else {
                res.json({status: 'failed'})
            }
        })
    }
};

export const searchCategoryCon = () => {
    return (req, res) => {
        const keyword = req.params.keyword;
        searchCategory(keyword, (list) => {
            if (list && list.length > 0) {
                res.json({categories: getListCategoryInfo(list), status: 'success'});
            } else {
                res.json({status: 'failed'})
            }
        })
    }
};