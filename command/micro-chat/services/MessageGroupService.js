import { MessageGroup } from '../models'
import globalId from '../config/globalId'
import { getInfoFromListId, chatGroupCreatedPub, chatGroupUpdatedPub } from '../controllers/ChatPubController'

const GLOBAL_GROUP_ID = globalId.MESSAGE_GROUP_GLOBAL_ID;
const USER_GLOBAL_ID = globalId.USER_GLOBAL_ID;

export const getLocalGroupId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3);
};

export const getGlobalGroupId = (id) => {
    return GLOBAL_GROUP_ID + id;
};

export const getGroupMessage = (id, next) => {
    if (!id) {
        next(null);
        return;
    }
    MessageGroup.findById(getLocalGroupId(id), (err, group) => {
        next(group);
    })
};

export const createGroup = (members, groupName, groupColor, next) => {
    const group = new MessageGroup({members: members, groupName: groupName, groupColor: groupColor});
    console.log('this ' + group);
    group.save((err) => {
        next(getGroupBasicInfo(group));
        chatGroupCreatedPub(getGroupBasicInfo(group));
    })
};

export const getGroupFullInfo = (group, next) => {
    getInfoFromListId(group.members, (infos) => {
        next({
            members: infos, groupName: group.groupName, groupColor: group.groupColor,
            mesId: group.groupId
        })
    })
};

export const getGroupBasicInfo = (group) => {
    return {
        members: group.members, groupName: group.groupName, groupColor: group.groupColor,
        groupId: getGlobalGroupId(group._id ? group._id : group.id)
    }
};

export const addMember = (groupId, memberIds, next) => {
    getGroupMessage(groupId, (group) => {
        if (!group) next(null);
        else {
            for (let i = 0; i < memberIds.length; ++i) {
                group.members.push(memberIds[i]);
            }
            group.save((err) => {
                chatGroupUpdatedPub(getGroupBasicInfo(group));
                getInfoFromListId(group.members, (infos) => {
                    next(infos, group);
                })
            })
        }
    })
};

export const removeMember = (groupId, memberId, next) => {
    getGroupMessage(groupId, (group) => {
        if (!group) next(null);
        else {
            chatGroupUpdatedPub(getGroupBasicInfo(group));
            group.members.pull(memberId);
            group.save((err) => {
                next(group);
            })
        }
    })
};

export const updateGroupInfo = (mesId, info, next) => {
    getGroupMessage(mesId, (group) => {
        if (!group) next(null);
        else {
            if (info.groupName) group.groupName = info.groupName;
            else group.groupName = '';
            if (info.groupColor) group.groupColor = info.groupColor;
            group.save((err) => {
                chatGroupUpdatedPub(getGroupBasicInfo(group));
                next(group);
            })
        }
    })
};

export const getMessageGroupInfo = (group, next) => {
    getInfoFromListId(group.members, (membersInfo) => {
        let basicInfo = [];
        for (let i = 0; i < membersInfo.length; ++i) {
            basicInfo.push({
                id: membersInfo[i].id,
                avatarUrl: membersInfo[i].id,
                name: (membersInfo[i].userName) ? membersInfo[i].userName :
                        membersInfo[i].storeName,
            })
        }
        next({
            mesId: getGlobalGroupId(group._id),
            members: basicInfo,
        })
    })
};