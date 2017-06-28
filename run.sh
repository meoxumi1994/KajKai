pm2 kill &&

pm2 start ./event-store/indes-event.js &&

pm2 start ./command/micro-user/index-user.js &&
pm2 start ./command/micro-store/index-store.js &&
pm2 start ./command/micro-socket/index-socket.js &&
pm2 start ./command/micro-comment/index-comment.js &&
pm2 start ./command/micro-chat/index-chat.js &&

pm2 start ./query/view-user/indev-user.js &&
pm2 start ./query/view-store/indev-store.js &&
pm2 start ./query/view-post/indev-post.js &&
pm2 start ./query/view-chat/indev-chat.js
