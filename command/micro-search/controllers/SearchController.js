import { searchUser } from '../services/UserSearchService'

export const searchUserCon = () => {
    return (req, res) => {
        const { keyword, offset, length } = req.query;
        console.log(keyword);
        searchUser(keyword, offset, length, (data) => {
            res.json(data)
        });
    }
};