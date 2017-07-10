import config from '../config/elasticConfig'
import searchClient from '../datasource'

export const createUser = (user, next) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_USER,
        id: user.userId,
        body: user
    }, function (error, response) {

    });
};

export const updateUser = (message, next) => {
    console.log(message, JSON.stringify(message));
    if (message.status === 'success') {
        const user = message.user;
        const userId = user.id;
        const username = user.username;
        const avatarUrl = user.avatarUrl;
    }
};

