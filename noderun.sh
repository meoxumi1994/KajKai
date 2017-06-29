nodemon kill &

nodemon ./event-store/indes-event.js &

nodemon ./command/micro-user/index-user.js &
nodemon ./command/micro-store/index-store.js &
nodemon ./command/micro-socket/index-socket.js &
nodemon ./command/micro-comment/index-comment.js &
nodemon ./command/micro-chat/index-chat.js &

nodemon ./query/view-user/indev-user.js &
nodemon ./query/view-store/indev-store.js &
nodemon ./query/view-post/indev-post.js &
nodemon ./query/view-chat/indev-chat.js
