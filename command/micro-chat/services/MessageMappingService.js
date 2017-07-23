import { MessageMapping } from '../models'
import { createGroup, getGroupBasicInfo } from './MessageGroupService'

export const getIdCombination = (id1, id2) => {
    if (id1.localeCompare(id2) <= 0) return id1 + id2;
    else return id2 + id1;
};

export const getMesIdFromTwoId = (id1, id2, next) => {
    const combId = getIdCombination(id1, id2);
    MessageMapping.findOne({userIdCombination: combId}, (err, mapping) => {
        if (mapping) {
            next(mapping.mesId)
        } else {
            createGroup([id1, id2], null, null, (group) => {
                addNewMapping(id1, id2, group.groupId, (messageMapping) => {
                    next(group.groupId);
                })
            })
        }
    })
};

export const addNewMapping = (id1, id2, mesId, next) => {
    const comId = getIdCombination(id1, id2);
    const messageMapping = new MessageMapping({mesId: mesId, userIdCombination: comId});
    messageMapping.save((err) => {
        next(messageMapping);
    })
};