socket mac dinh { type: , data: ... }
server tra ve neu bi failed thi { type: , data: undefined, reason: ''}

'server/JOIN_POST' {
    sellpostid:
    minorpostid:
    offsettop:     // -1 == end
    offsetbottom:    // -1 == end
}
'server/LEAVE_POST' {
    sellpostid:
    minorpostid:
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

'server/UN_LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    id:
},
'global/UN_LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
    storeid: ,
    sellpostid: ,
    minorpostid: ,
    leadcommentid: ,
    subcommentid:,
},
'client/UN_LIKE' {
    type: 'store|sellpost|minorpost|leadercomment|comment'
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







'server/READ_CHAT': [
    '593e4c1a2688d830be26fc00'  // mesId
] // return global/UNREAD_CHAT
,
'global/UNREAD_CHAT': {
    quantity: '2',
    messages: [           // INITIAL list of mesId count to show number unread
        "593e4c1a2688d830be26fc00",
        "593e4c1a2688d830be26fc66"
    ]
}

// 4. [Socket.io] Send new message
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
     mesId: '',
     id: '',                      // senderId
     message: {
         text: '',
         url: '',
         type: ''
     },
     time: ''
 }

'server/JOIN_MEMBER': {
    mesId: '',              // if mesId == null, create new one
    members: [
      ''
    ],
    id: '',
    time: ''
},
'client/JOIN_MEMBER': { // thang doi phuong khong duoc gi ca
    mesId: '',
    members: [
      {
          id: '',
          avatarUrl: '',
          name: ''
      }
    ],
    id: '',
    time: ''
}

'server/UPDATE_GROUP_MEMBERS': {
    mesId: '',
    id: '',
    memberId: '', // if memberId == null => kick id
    time: ''
},'client/UPDATE_GROUP_MEMBERS':  {
    mesId: '',
    id: '',
    memberId: '',
    time: ''
}

'server/UPDATE_UI': {
    mesId: '',
    id: '',
    data: {
        groupName: '',
        groupColor: ''
    }
},'client/UPDATE_UI': {
    mesId: '',
    id: '',
    data: {
        groupName: '',
        groupColor: ''
    }
}
