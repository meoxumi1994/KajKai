import { createUser, updateUser } from '../services/UserSearchService'
import { createStore, updateStore } from '../services/StoreSearchService'

export const createUserSub = (message) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    createUser({userId, username, avatarUrl});
};

export const updateUserSub = (message) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    updateUser({userId, username, avatarUrl});
};

export const createStoreSub = (message, next) => {
    console.log(message, JSON.stringify(message));
    const store = message.store;
    const storeId = store.id;
    const storeName = store.storeName;
    const avatarUrl = store.avatarUrl;
    const address = store.address;
    const category = store.category;
    const firstCategoryName = store.firstCategoryName;
    const secondCategoryName = store.secondCategoryName;
    createStore({storeId, storeName, avatarUrl, address, category, firstCategoryName, secondCategoryName});

};

export const updateStoreSub = (message, next) => {
    console.log(message, JSON.stringify(message));
    const store = message.store;
    const storeId = store.id;
    const storeName = store.storeName;
    const avatarUrl = store.avatarUrl;
    const address = store.address;
    const category = store.category;
    const firstCategoryName = store.firstCategoryName;
    const secondCategoryName = store.secondCategoryName;
    updateStore({storeId, storeName, avatarUrl, address, category, firstCategoryName, secondCategoryName});
};