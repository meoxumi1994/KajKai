socket mac dinh { type: , data: ... }
server tra ve neu bi failed thi { type: , data: undefined, reason: ''}

//// NEW NEW NEW NEW NEW

'client/sendToken' {
    tokenId:
}

'client/JOIN_POST' {
    sellpostid || minorpostid:
}
'client/JOIN_LEADERCOMMENT' {
    leadercommentid:
}
'client/LEAVE_POST' {
    sellpostid || minorpostid:
}

'client/COMMENT' && 'global/COMMENT' {
    id:
    sellpostid || minorpostid:
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
    like:
}
'client/GET_MORE_COMMENT' {
    offset:
    comments: [{
        id:
        sellpostid || minorpostid:
        leadercommentid:
    	content:
    	name:
    	avatarUrl:
    	commenterid:
    	time:
        like:
    }]
}
'client/COMMENT_ING' {
    sellpostid || minorpostid:
    leadercommentid:
}

'client/LEADERCOMMENT' && 'global/LEADERCOMMENT' {
    id:
    sellpostid || minorpostid:
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
    like:
}
'client/GET_MORE_LEADERCOMMENT' {
    offset:
    leadercomments: [{
        id:
        sellpostid || minorpostid:
        content:
        name:
        avatarUrl:
        commenterid:
        time:
        order: [
            {
                id: '',
                content: ,
                imageUrl: ,
                list: [],
                num: ,
            },
        ],
        like:
    }]
}
'client/LEADERCOMMENT_ING' {
    sellpostid || minorpostid:
},

'client/LIKE' && 'global/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    status: 'like|love|haha|wow',
    storeid: ,
    sellpostid: ,
    minorpostid: ,
    leadcommentid: ,
    commentid:,
}


//// NEW NEW NEW NEW NEW
'server/JOIN_SELL_POST' {
    sellpostid:
    offset:
}
'client/JOIN_SELL_POST' {

}
'server/LEAVE_POST' {
    sellpostid:
    minorpostid:
    offset:
}
'server/COMMENT' {
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
},
'global/COMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
},
'client/COMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
    like: 0 // vi comment vua duoc tao nen like = 0
}

'server/COMMENT_ING' {
    leadercommentid:
},
'client/COMMENT_ING' { // chi nhung thang 'client/JOIN_COMMENT' moi duoc nhan
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    leadercommentid:
}


'server/LEADERCOMMENT' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
},
'global/LEADERCOMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
},
'client/LEADERCOMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
    like: 0, // vi leadercomment vua duoc tao nen like = 0
}

'server/LEADERCOMMENT_ING' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
},
'client/LEADERCOMMENT_ING' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
}


'server/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    id:
},
'global/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    status:
    storeid: ,
    sellpostid: ,
    minorpostid: ,
    leadcommentid: ,
    subcommentid:,
},
'client/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    status:
    storeid: ,
    sellpostid: ,
    minorpostid: ,
    leadcommentid: ,
    subcommentid:,
}


'server/EDIT_SELLPOST' {
    type: ,
    storeid: ,
    sellpostid: ,
}


// return when socket connected
'global/UNREAD_CHATS': {
    quantity: '2',
    messages: [
        "593e4c1a2688d830be26fc00",
        "593e4c1a2688d830be26fc66"
    ]
}

'server/RESET_UNREAD_CHATS_QUANTITY': {

},'client/RESET_UNREAD_CHATS_QUANTITY': {
    quantity: 0
}

// Remove a list of mesId from UNREAD_CHAT_LIST
'server/READ_CHAT': [
    '593e4c1a2688d830be26fc00'  // mesId
],
// Return mesIds that were removed
'client/READ_CHAT': [
    '593e4c1a2688d830be26fc00'
]

// Send new message
'server/SEND_MESSAGE': {
    mesId: '',
    id: '',                      // senderId
    message: {
      text: '',
      url: '',
      type: ''
    },
    time: ''
   }
),
'global/RECEIVE_MESSAGE': {
     mesId,
     user: {
       id,
       avatarUrl,
       username
     },                      // senderId
     message: {
         text,
         url,
         type
     },
     time
 }

// Add member to group or create new chat
'server/ADD_MEMBER': {
    mesId: '',              // if mesId == null, create new one
    members: [
      ''
    ],
    id: '',
    time: ''
},
'client/ADD_MEMBER': {
    mesId: '',
    members: [
      {
          id: '',
          avatarUrl: '',
          username: ''
      }
    ],
    id: '',
    time: ''
}

// Remove member from group     // status thang bi xoa == false
'server/REMOVE_MEMBER': {
    mesId: '',
    id: '',
    memberId: '',
    time: ''
},'client/REMOVE_MEMBER':  {
    mesId: '',
    id: '',
    memberId: '',
    time: ''
}

'server/UPDATE_UI': {
    mesId: '',
    id: '',
    data: {
        groupName: ''
    }
},'client/UPDATE_UI': {
    mesId: '',
    id: '',
    data: {
        groupName: ''
    }
}


socket mac dinh { type: , data: ... }

'server/JOIN_COMMENT' {
    offset:
    leadercommentid:
}
'client/JOIN_COMMENT' {
    offset: // time
    comments: [
        {
            commentid:
        	content:
        	name:
        	avatarUrl:
        	commenterid:
        	time:
            numlike:
        }
    ]
}
'server/COMMENT' {
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
},
'global/COMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
},
'client/COMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    leadercommentid:
	content:
	name:
	avatarUrl:
	commenterid:
	time:
    like: 0 // vi comment vua duoc tao nen like = 0
}
'server/LEAVE_COMMENT' {
    leadercommentid:
}

'server/COMMENT_ING' {
    leadercommentid:
},
'client/COMMENT_ING' { // chi nhung thang 'client/JOIN_COMMENT' moi duoc nhan
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    leadercommentid:
}

'client/POST_POSTROW' {

}
'client/PUT_POSTROW' {
    sellpostid:

}
'client/DELETE_POSTROW' {

}


'server/JOIN_LEADERCOMMENT' {
    offsettop:
    offsetbot:
    type: 'TOP|BOT'
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
}
'client/JOIN_LEADERCOMMENT' {
    offsettop: // time
    offsetbot: // time
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
    likes: [
        {
            commentid: ,
            numlike: ,
        }
    ]
}
'server/LEADERCOMMENT' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
},
'global/LEADERCOMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
},
'client/LEADERCOMMENT' {
    id:
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
    content:
    name:
    avatarUrl:
    commenterid:
    time:
    order: [
        {
            id: '',
            content: ,
            imageUrl: ,
            list: [],
            num: ,
        },
    ],
    like: 0, // vi leadercomment vua duoc tao nen like = 0
}
'server/LEAVE_LEADERCOMMENT' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
}

'server/LEADERCOMMENT_ING' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
},
'client/LEADERCOMMENT_ING' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
}


'server/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    id:
},
'global/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    storeid: ,
    sellpostid: ,
    minorpostid: ,
    leadcommentid: ,
    subcommentid:,
},
'client/LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    storeid: ,
    sellpostid: ,
    minorpostid: ,
    leadcommentid: ,
    subcommentid:,
}

'client/POST_POSTROW' {
    id: ,
    sellpostid: ,
    content: ,
    numline: , // numline of row <= 30
    images: [
    // list of imageUrl
    ], // textimage|imagetext|groupimage
    titles_order: [],
    titles: [ // for product|listproduct otherwise  null

    ],
    products_order: [],
    products: [ // for product|listproduct otherwise  null
        {
          content: ,
          imageUrl: , // 20x20
          list: [],
        },
    ],
    type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
}

'client/PUT_POSTROW' {
    id: ,
    content: ,
    numline: , // numline of row <= 30
    images: [
    // list of imageUrl
    ], // textimage|imagetext|groupimage
    titles_order: [],
    titles: [ // for product|listproduct otherwise  null

    ],
    products_order: [],
    type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
}
'client/DELETE_POSTROW' {
    sellpostid: ,
    postrows_order: [],
    id: ,
}
'client/POST_PRODUCT' {
    id:
    postrowsid:
    products_order: []
    product: {
      content: ,
      imageUrl: , // 20x20
      list: [],
    },
}

'client/PUT_PRODUCT' {
    id:
    postrowsid:
    products_order: []
    product: {
      content: ,
      imageUrl: , // 20x20
      list: [],
    },
}

'client/DELETE_PRODUCT' {
    postrowsid:
    products_order: []
    id:
}

'server/GET_POST_BY_BOUNDS' {
    bounds: {
        southWest: {
          lat: '',
          lng: ''
        },
        northEast: {
          lat: '',
          lng: ''
        }
    },
    sellposts: [
        {
            sellpostid: '',
            offset: ''
        }
    ]
}
'client/GET_POST_BY_BOUNDS' [
    {
        offset:
        storeid:
        storename:
        avatarUrl:
        category:
        sellpostid:
        title:
        description:
        lastupdatetime:
        phone:
        address:
        numlikes:
        numcomments:
        numshare:
    }
]
