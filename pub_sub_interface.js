export default {
    user: {
        sub: ['USER.GetUser', 'USER.AuthorizeToken'],
        pub: [''],
    },
    store: {
        sub: ['STORE.GetStore'],
        pub: ['STORE.GetUser', 'STORE.AuthorizeToken']
    },
    comment: {
        sub: ['STORE.GetStore'],
        pub: ['STORE.GetUser', 'STORE.AuthorizeToken']
    },
    like: {
        sub: ['STORE.GetStore'],
        pub: ['STORE.GetUser', 'STORE.AuthorizeToken', 'COMMENT.AddLikeFir', 'COMMENT.AddLikeSec', 'STORE.AddLikeStore', 'STORE.AddLikePost']
    }

}
