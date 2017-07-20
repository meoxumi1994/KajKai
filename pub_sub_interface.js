export default {
    user: {
        sub: ['USER.GetUser', 'USER.AuthorizeToken'],
        pub: //['USER.Created', 'USER.Updated', 'USER.PasswordUpdated', 'USER.PhoneUpdated', 'USER.BlackList'],{
            [{
                event: 'USER.Created',
                user:
                    {
                        username: '',
                        email: '',
                        avatarUrl: '',
                        id: '',
                        imageUrls: [''],
                    }
                },
                {
                    event: 'USER.Updated',
                    user: {
                        username: '',
                        avatarUrl: '',
                        coverUrl: '',
                        imageUrls: [''],
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
                        userId: '', blockId: '', status: 'add|remove', type: 'userid|storeid|mesid'
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
                owner: '',
                storeName: '',
                avatarUrl: '',
                coverUrl: '',
                address: '',
                addressMap: '',
                category: '',
                firstCategoryId: '',
                secondCategoryId:'',
                longitude: '',
                latitude: '',
                phone: '',
                certificates: '',
                urlName: '',
                createdAt: '',
                lastUpdate: {
                    lastUpdateStoreName: '',
                    lastUpdateAvatarUrl: '',
                    lastUpdateCoverUrl: ''
                },
                firstCategoryName: '',
                secondCategoryName: ''
            }
        },{
            event: 'STORE.Updated',
            store: {
                id: '',
                owner: '',
                storeName: '',
                avatarUrl: '',
                coverUrl: '',
                address: '',
                addressMap: '',
                category: '',
                firstCategoryId: '',
                secondCategoryId:'',
                longitude: '',
                latitude: '',
                phone: '',
                certificates: '',
                urlName: '',
                createdAt: '',
                lastUpdate: {
                    lastUpdateStoreName: '',
                    lastUpdateAvatarUrl: '',
                    lastUpdateCoverUrl: ''
                },
                firstCategoryName: '',
                secondCategoryName: ''
            }
        },{
            event: 'SELLPOST.Updated',
            sellpost: {
                sellPostId: '',
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
                sellPostId: '',
                storeId: '',
                category:'',
                title:'',
                description:'',
                time:'', // last update
                status: 'notyet|open|sleep',
                ship: '', // store viết vào có thể un,
                postrows_order: [],
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
                postrowId: '',
                sellPostId:'',
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
                sellPostId: '',
                postrowId:'',
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
                sellPostId: '',
            }
        },{
            event: 'POSTROW.PRODUCT.Created',
            product: {
                sellPostId: '',
                postrowsId: '',
                productId: '',
                product: {
                    content:'',
                    imageUrl:'', // 20x20
                    list: [],
                },
            }
        },{
            event: 'POSTROW.PRODUCT.Updated',
            product: {
                sellPostId: '',
                postrowsId: '',
                productId: '',
                product: {
                    content:'',
                    imageUrl:'', // 20x20
                    list: [],
                },
            }
        },{
            event: 'POSTROW.PRODUCT.Deleted',
            product: {
                sellPostId: '',
                postrowsId: '',
                productId: '',
            }
        },{
            event: 'MINORPOST.Created',
            minorPost: {

            }
        },{
            event: 'MINORPOST.Updated',
            minorPost: {
                minorPostId: '',
                storeId: '',
                lineCount: '',
                content: '',
                time: '',
                images: '',
                video: ''
            }
        }]
    },
    comment: {
        sub: ['STORE.GetStore'],
        pub: //['STORE.GetUser', 'STORE.AuthorizeToken']
        [
            {
                event: 'COMMENT.FirstLayerCommentCreated',
                fComment: {
                    posterId: '', order: [{
                        id: '',
                        content: '',
                        imageUrl: '',
                        list: [''],
                        num: ''
                    }],
                    time: '',
                    content: '', fCommentId: '',
                    sellPostId: '', minorPostId: ''
                }
            },{
                event: 'COMMENT.SecondLayerCommentCreated',
                sComment: {
                    posterId:'', time: '',
                    content: '', parentCommentId: '',
                    sCommentId: '',
                    sellPostId: '', minorPostId: ''
                }
            }
        ]
    },
    like: {
        sub: ['STORE.GetStore'],
        pub: ['STORE.GetUser', 'STORE.AuthorizeToken', 'COMMENT.AddLikeFir', 'COMMENT.AddLikeSec', 'STORE.AddLikeStore', 'STORE.AddLikePost']
    },
    socket: {
        pub: [{
            event: 'SOCKET.COMMENT.GetFirstLayerComments',
            data: {
                offset: '', //time
                length: '',
                sellPostId: '', minorPostId: ''
            },
            return: {
                message: {
                    comments: '....'
                }
            }

        },{
            event: 'SOCKET.COMMENT.GetSecondLayerComments',
            data: {
                offset: '',
                length: '',
                sellPostId: '', minorPostId: '',
                fCommentId: ''
            },
            return: {
                message: {
                    comments: '....'
                }
            }
        }]
    },
    chat: {
        pub: [{
            event: 'CHATGROUP.Created',
            chatGroup: {
                members: [String], groupName: '', groupColor: '',
                groupId: ''
            }
        },{
            event: 'CHATGROUP.Updated',
            chatGroup: {
                members: [String], groupName: '', groupColor: '',
                groupId: ''
            }
        },{
            event: 'MESSAGE.Created',
            message: {
                mesId: '', senderId: '', time: '',
                message: {
                    text: '',
                    url: '',
                    type: ''
                },
                read: false
            },
            receiverIds: []
        },{
            event: 'MESSAGE.Read',
            userId: '',
            groupId: '' // mesId == groupId
        }]
    },
    notification: {
        pub: [{
            event: 'LIKE.AddLike',
            like: {
                likenId: '',
                likerId: ''
            }
        },{
            event: 'LIKE.RemoveLike',
            like: {
                likenId: '',
                likerId: ''
            }
        }]
    }

}
