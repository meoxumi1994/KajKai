import { getMesIdFromTwoId } from '../services/MessageMappingService'

export const getMesIdCon = () => {
    return (req, res) => {
        const { id, person } = req.query;
        getMesIdFromTwoId(id, person, (mesId) => {
            res.json({mesId: mesId});
        })
    }
};
