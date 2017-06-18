socket mac dinh { type: , data: ... }

'server/JOIN_COMMENT' {
    offset:
    leadercommentid:
}
'client/JOIN_COMMENT' {
    offset: // time
    leadercomments: [
        {
            leadercommentid:
        	content:
        	name:
        	avatarUrl:
        	commenterid:
        	time:
        }
    ]
    likes: [
        {
            commentid: ,
            numlike: ,
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
