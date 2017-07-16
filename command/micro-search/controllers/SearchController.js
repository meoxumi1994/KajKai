import { searchUser, delIndex } from '../services/UserSearchService'
import { searchStore } from '../services/StoreSearchService'

export const searchUserCon = () => {
    return (req, res) => {
        const { keyword, offset, length } = req.query;
        console.log(keyword);
        searchUser(keyword, offset, length, (data) => {
            res.json(data)
        });
    }
};

export const searchStoreCon = () => {
    return (req, res) => {
        const { keyword, offset, length } = req.query;
        console.log(req.query);
        searchStore(keyword, offset, length, (data) => {
            res.json(data);
        })
    }
};

export const deleteIndexCon = () => {
    return (req, res) => {
        delIndex(() => {
            res.json({status: 'success'});
        });
    }
};