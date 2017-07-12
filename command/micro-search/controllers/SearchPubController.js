import { searchUser } from '../services/UserSearchService'

export const searchUserCon = () => {
    return (req, res) => {
        const { keyword } = req.query;
        console.log(keyword);
        searchUser(keyword, (data) => {
            res.json(data)
        });
    }
};