mongo -u admin -p admin --authenticationDatabase admin kajkas-event --eval "db.dropDatabase()" &&
mongo -u admin -p admin --authenticationDatabase admin kajkav-user --eval "db.dropDatabase()" &&
mongo -u admin -p admin --authenticationDatabase admin kajkav-store --eval "db.dropDatabase()" &&
mongo -u admin -p admin --authenticationDatabase admin kajkav-post --eval "db.dropDatabase()" &&
mongo -u admin -p admin --authenticationDatabase admin kajkav-chat --eval "db.dropDatabase()" &&

pm2 kill &&

pm2 start ./event-store/indes-event.js &&
pm2 start ./query/view-user/indev-user.js &&
pm2 start ./query/view-store/indev-store.js &&
pm2 start ./query/view-post/indev-post.js &&
pm2 start ./query/view-chat/indev-chat.js
