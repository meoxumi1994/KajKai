mongo kajkas-event --eval "db.dropDatabase()" &&
mongo kajkav-user --eval "db.dropDatabase()" &&
mongo kajkav-store --eval "db.dropDatabase()" &&
mongo kajkav-post --eval "db.dropDatabase()" &&
mongo kajkav-chat --eval "db.dropDatabase()" &&

pm2 kill &&

pm2 start ./event-store/indes-event.js &&
pm2 start ./query/view-user/indev-user.js &&
pm2 start ./query/view-store/indev-store.js &&
pm2 start ./query/view-post/indev-post.js &&
pm2 start ./query/view-chat/indev-chat.js
