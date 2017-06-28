pm2 kill &&

pm2 start ./command/micro-user/index-user.js &&
pm2 start ./command/micro-store/index-store.js &&
pm2 start ./command/micro-socket/index-socket.js &&
pm2 start ./command/micro-comment/index-comment.js &&
pm2 start ./command/micro-chat/index-chat.js
