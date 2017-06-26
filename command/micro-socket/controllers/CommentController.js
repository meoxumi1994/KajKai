export const joinPostCon = (action, sio, io) => {
    if (action.data.sellpostid) {
        sio.join(action.data.sellpostid)
    } else {
        sio.join(action.data.minorpostid)
    }
};

export const joinFirstLayerCommentCon = (action, sio, io) => {
    if (action.data.leadercommentid) {
        sio.leave(action.data.length);
    }
};

export const leavePostCon = (action, sio, io) => {
    if (action.data.sellpostid) {
        sio.leave(action.data.sellpostid)
    } else {
        sio.leave(action.data.minorpostid)
    }
};

export const addNewSecondLayerCommentCon = (action, sio, io) => {

};