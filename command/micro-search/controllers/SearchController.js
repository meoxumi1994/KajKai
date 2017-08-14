import { searchUser, delIndex } from '../services/UserSearchService'
import { searchStore } from '../services/StoreSearchService'
import { searchSellPost } from '../services/SellPostSearchService'

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
        delIndex((error, response) => {
            res.json({error: error, response: response});
        });
    }
};

export const searchSellPostCon = () => {
    return (req, res) => {
        const { offset, length, id, keyword, lat, lng } = req.query;
        console.log(req.query);
        searchSellPost(offset, length, id, { lat, lng }, keyword, (data) => {
            res.json(data)
        });
    }
};