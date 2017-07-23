import { UnreadMessageCount } from '../models'

export const getUnreadCounter = (userId, next) => {
    UnreadMessageCount.findOne({userId: userId}, (err, doc) => {
        if (!doc) {
            const counter = new UnreadMessageCount({userId: userId, counter: 0});
            counter.save((err) => {
                next(0);
            })
        } else {
            next(doc.counter);
        }
    })
};

export const updateCounter = (userId, val, next) => {
    UnreadMessageCount.findOne({userId: userId}, (err, doc) => {
        if (!doc) {
            const counter = new UnreadMessageCount({userId: userId, counter: val});
            if (counter.counter < 0) counter.counter = 0;
            counter.save((err) => {
                next(val);
            })
        } else {
            doc.counter += val;
            if (doc.counter < 0) doc.counter = 0;
            doc.save((err) => {
                next(doc.counter);
            });
        }
    })
};

export const updateCounterMultiple = (userIds, val, next) => {
    updateCounterMultipleRecur(userIds, userIds.length, val, () => {
        next();
    })
};

export const updateCounterMultipleRecur = (userIds, index, val, next) => {
    if (index === 0) next();
    else {
        updateCounterMultipleRecur(userIds, index - 1, val, () => {
            updateCounter(userIds[index - 1], val, () => {
                next();
            })
        })
    }
};

export const setCounter = (userId, val, next) => {
    UnreadMessageCount.findOne({userId: userId}, (err, doc) => {
        if (!doc) {
            const counter = new UnreadMessageCount({userId: userId, counter: val});
            counter.save((err) => {
                next(val);
            })
        } else {
            doc.counter = val;
            doc.save((err) => {
                next(doc.counter);
            });
        }
    })
};