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
                        userId: '', blockId: '', status: 'add|remove' // cho anh thêm cái type userid|storeid|mesid nữa lão Đại - charity
                    }
                }
            ]
    },
    store: {
        sub: ['STORE.GetStore'],
        // pub: ['STORE.GetUser', 'STORE.AuthorizeToken', 'STORE.Updated', 'Store.Created', 'SELLPOST.Updated', 'SELLPOST.Deleted', 'POSTROW.Created',
        // 'POSTROW.Updated', 'POSTROW.Deleted', 'PRODUCT.Created']
        pub: [{
            event: 'STORE.Created',
            store: {
                id: '',
                owner:'',
                storeName: '',
                avatarUrl: '',
                coverUrl: '',
                address: '',
                addressMap: '',
                category: '',
                longitude: '',
                latitude: '',
                phone: '',
                certificates: {
                    images: [],
                    content: ''
                }
            }
        },{
            event: 'STORE.Updated',
            store: {
                id: '',
                owner:'',
                storeName: '',
                avatarUrl: '',
                coverUrl: '',
                address: '',
                addressMap: '',
                category: '',
                longitude: '',
                latitude: '',
                phone: '',
                certificates: {
                    images: [],
                    content: ''
                }
            }
        },{
            event: 'SELLPOST.Updated',
            sellpost: {
                category: '',
                title: '',
                description: '',
                time: '', // last update
                status: 'notyet|open|sleep',
                ship: '', // store viết vào có thể un
                postrows_order: [],
            }
        },{
            event: 'SELLPOST.Created',
            sellpost: {
                storeId: '', // publish thêm storeName nữa lão Đại - charity
                category:'',
                title:'',
                description:'',
                time:'', // last update
                status: 'notyet|open|sleep',
                ship: '', // store viết vào có thể un
            }
        },{
            event: 'SELLPOST.Deleted',
            sellpost: {
                storeId: '',
                sellPostId: '',
            }
        },{
            event: 'POSTROW.Created',
            postrow: {
                sellpostid:'',
                content:'',
                numline:'', // numline of row <= 30
                images: [
                    // list of imageUrl
                ], // textimage|imagetext|groupimage
                titles_order: [],
                titles: [ // for product|listproduct otherwise  null

                ],
                products_order: [],
                products: [ // for product|listproduct otherwise  null
                    {
                        content:'',
                        imageUrl:'', // 20x20
                        list: [],
                    },
                ],
                type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
            }
        },{
            event: 'POSTROW.Updated',
            postrow: {
                id:'',
                content:'',
                numline:'', // numline of row <= 30
                images: [
                    // list of imageUrl
                ], // textimage|imagetext|groupimage
                titles_order: [],
                titles: [ // for product|listproduct otherwise  null

                ],
                products_order: [],
                type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
            }
        },{
            event: 'POSTROW.Deleted',
            postrow: {
                postrowId:'',
                sellpostId: '',
            }
        },{
            event: 'POSTROW.PRODUCT.Created',
            product: {
                sellpostid: '',
                postrowsid: '',
                productid: '',
                product: {
                    content:'',
                    imageUrl:'', // 20x20
                    list: [],
                },
            }
        },{
            event: 'POSTROW.PRODUCT.Updated',
            product: {
                sellpostid: '',
                postrowsid: '',
                productid: '',
                product: {
                    content:'',
                    imageUrl:'', // 20x20
                    list: [],
                },
            }
        },{
            event: 'POSTROW.PRODUCT.Deleted',
            product: {
                sellpostid: '',
                postrowsid: '',
                productid: '',
            }
        }]


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
