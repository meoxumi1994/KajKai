socket mac dinh { type: , data: ... }

'server/JOIN_COMMENT' {
    leadercommentid:
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




'server/JOIN_LEADERCOMMENT' {
    sellpostid:
    minorpostid: // sellpostid = undefined hoac minorpostid = undefined
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

'server/UNLIKE' {

}
