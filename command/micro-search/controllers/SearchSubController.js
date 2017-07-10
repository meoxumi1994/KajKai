
export const createUser = (message, next) => {
    console.log(message, JSON.stringify(message));
    if (message.status === 'success') {
        const user = message.user;
        const userId = user.id;
        const username = user.username;
        const avatarUrl = user.avatarUrl;
    }
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

export const createStore = (message, next) => {
    console.log(message, JSON.stringify(message));
    if (message.status === 'success') {
        const store = message.store;
        const storeId = store.id;
        const storeName = store.storeName;
        const avatarUrl = store.avatarUrl;
    }
};

export const updateStore = (message, next) => {
    console.log(message, JSON.stringify(message));
    if (message.status === 'success') {
        const store = message.store;
        const storeId = store.id;
        const storeName = store.storeName;
        const avatarUrl = store.avatarUrl;
    }
};