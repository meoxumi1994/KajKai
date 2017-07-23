user {
    stores: [],
    chats: [],
    ons: onsid,
    emitscontact: emitsid,
    posts: [postid || notifypostid],
}

notifypost {
    userid, categoryid, locationid,
}

store {
    userid, categoryid, locationid, positionid,
    emitslike: emitsid,
    emitsshare: emitsid,
    emitsfollow: emitsid,
    ons: onsid,
    chats: [chatid],
    posts: [postid],
}

post {
    userid, storeid, categoryid, locationid,
    groupcomments: [leadercommentid],
    emitslike: emitsid,
    emitsshare: emitsid,
    emitscomment: emitsid,
}

row {
    userid, storeid, postid,
    products: [productid]
}

product {
    userid, storeid, postid, rowid, categoryid, locationid,
    emitscall: [emitsid]
}

leadercomment {
    userid, storeid, postid,
    comments: [commentid],
    products: [productid],
}

comment {
    userid, storeid, postid, leadercommentid,
    emitslike: emitsid,
}

chat {
    messages: [messageid],
    emits: emitsid,
}

message {
    chatid,
}

location {
    fatherlocationid,
    childrenlocations: [locationid],
    emitsfollow: [emitsid],
}

position {
    storeid, locationid,
}

category {
    stores: [storeid],
    posts: [postid],
    products: [productid],
}

ons {
    ons: [emitid]
}

emits {
    emits: [onid],
}

/////////////

user {
    follow -> (category,location), store, post, user
    chat -> store, user
}

user privacy {
    who can see your email, phone, address
    who can see your basic info
    who can chat with me

}

store privacy {
    who can see my certificate bussiness
    who can chat with me
    { anyone, user has email, user has phone }
}

post privacy {
    who can comment in my posts
    { anyone, user has email, user has phone }
}

blog {
    unblog, blog
}
//--------
view-post

//--------
view-user

view-user-header {
    userid: string,
    avatar: string,
    cover: string,
    name: string,
    privacy: {
        contactWithMe: enum(),
    }
}

view-user-interest {
    userid: string,
    numLike: string,
    like: [],
    numFollow: string,
    follow: [],
    numSellPosts: number,
    sellPosts: [{
        ...
    }],
    numMinorPosts: number,
    sellMinorPosts: [{
        ...
    }]
}

view-user-about {
    userid: string,
    name: string,
    phone: string,
    address: string,
    email: string,
    gender: string,
    age: string,
    privacy: {
        email: enum(),
        phone: enum(),
        address: enum(),
        gender: enum(),
        age: enum(),
    }
}

view-user-post {
    sellPostMedium: [{
        ...
    }]
}

view-user-store {
    storeMedium: [{
        ...
    }]
}

view-user-contact {
    userMedium: [{
        ...
    }]
}

view-user-notification {
    notificationMedium: [{
        ...
    }]
}

view-user-activity {
    activityMedium: [{
        ...
    }]
}

view-user-setting {
    userid: string,
    name: string,
    phone: string,
    address: string,
    email: string,
    gender: string,
    age: string,
    password: string,
    lastUpdate: {
        name: time,
        phone: time,
        address: time,
        email: time,
        gender: time,
        age: time,
        password: time,
    },
    privacy: {
        email: enum(),
        phone: enum(),
        address: enum(),
        gender: enum(),
        age: enum(),
        contactWithMe: enum(),
    }
}

//-------
view-store

view-store-header {

}

view-store-page {

}

view-store-page {

}

view-page-setting {

}
