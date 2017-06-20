export default {
    user: {
        sub: ['USER.GetUser', 'USER.AuthorizeToken'],
        pub: //['USER.Created', 'USER.Updated', 'USER.PasswordUpdated', 'USER.PhoneUpdated', 'USER.BlackList'],{
            [{
                event: 'USER.Created',
                user: {
                            username: '',
                            email: '',
                            avatarUrl: '',
                            coverUrl: '',
                            id: ''
                    }
                },
                {
                    event: 'USER.Updated',
                    user: {
                        username: '',
                        avatarUrl: '',
                        coverUrl: '',
                        address: '',
                        phone:'',
                        language: '',
                        sex: '',
                        yearOfBirth: '',
                        lastUpdate: {
                            username: '',
                            phone: '',
                            address: '',
                        },
                        id: ''
                    }
                },
                {
                    event: 'USER.BlackListUpdated',
                    user: {
                        userId: '', blockId: '', status: ''
                    }
                }
            ]
    },
    store: {
        sub: ['STORE.GetStore'],
        pub: ['STORE.GetUser', 'STORE.AuthorizeToken', 'STORE.Updated', 'Store.Created', 'SELLPOST.Updated', 'SELLPOST.Deleted', 'POSTROW.Created',
        'POSTROW.Updated', 'POSTROW.Deleted', 'PRODUCT.Created'

        ]
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
