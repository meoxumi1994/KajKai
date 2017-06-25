import { addNewFirstLayerComment, getFirstLayerCommentInfo } from '../services/FirstLayerCommentService'
import { addNewSecondLayerComment, getSecondLayerCommentInfo } from '../services/SecondLayerCommentService'

export const addFirstLayerCommentSub = (message, next) => {
    addNewFirstLayerComment(message, (fComment) => {
        if (fComment) {
            getFirstLayerCommentInfo(fComment, (fCommentInfo) => {
                next({status: 'success', firstLayerComment: fCommentInfo})
            });
        } else {
            next({status: 'failed'})
        }
    })
};

export const addSecondLayerCommentSub = (message, next) => {
    addNewSecondLayerComment(message, (sComment) => {
        if (sComment) {
            getSecondLayerCommentInfo(sComment, (sCommentInfo) => {
                next({status: 'success', secondLayerComment: sCommentInfo});
            })
        } else {
            next({status: 'failed'})
        }
    })
};

