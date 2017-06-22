pm2 kill &&

pm2 start ./command/micro-user/index-user.js &&
pm2 start ./command/micro-store/index-store.js &&

pm2 start ./query/view-user/indev-user.js &&
pm2 start ./query/view-store/indev-store.js &&
pm2 start ./query/view-sellpost/indev-sellpost.js
