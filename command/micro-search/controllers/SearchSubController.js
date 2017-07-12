import { createUser, updateUser } from '../services/UserSearchService'

export const createUserSub = (message, next) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    createUser({userId, username, avatarUrl});
};

export const updateUserSub = (message, next) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    updateUser({userId, username, avatarUrl});
};

export const createStore = (message, next) => {
    console.log(message, JSON.stringify(message));
    const store = message.store;
    const storeId = store.id;
    const storeName = store.storeName;
    const avatarUrl = store.avatarUrl;

};

export const updateStore = (message, next) => {
    console.log(message, JSON.stringify(message));
    const store = message.store;
    const storeId = store.id;
    const storeName = store.storeName;
    const avatarUrl = store.avatarUrl;
};

// store: {
//     id: '',
//         owner: '',
//         storeName: '',
//         avatarUrl: '',
//         coverUrl: '',
//         address: '',
//         addressMap: '',
//         category: '',
//         firstCategoryId: '',
//         secondCategoryId:'',
//         longitude: '',
//         latitude: '',
//         phone: '',
//         certificates: '',
//         urlName: '',
//         createdAt: '',
//         lastUpdate: {
//         lastUpdateStoreName: '',
//             lastUpdateAvatarUrl: '',
//             lastUpdateCoverUrl: ''
//     },
//     firstCategoryName: '',
//         secondCategoryName: ''
// }