import { getCategoryList, getListCategoryInfo, searchCategory } from '../services/CategoryService'

export const getCategoryListCon = () => {
    return (req, res) => {
        getCategoryList((list) => {
            res.json({listCategories: getListCategoryInfo(list)});
        })
    }
};

export const searchCategoryCon = () => {
    return (req, res) => {
        const keyword = req.params.keyword;
        searchCategory(keyword, (list) => {
            res.json({listCategories: getListCategoryInfo(list)});
        })
    }
};