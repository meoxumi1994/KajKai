pm2 kill &&

mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkav-store --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkav-user --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-admin --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-user --eval "db.dropDatabase()" &&

pm2 flush &&

pm2 start ./query/view-store/indev-store.js &&
pm2 start ./query/view-user/indev-user.js &&
pm2 start ./command/micro-admin/index-admin.js &&
pm2 start ./command/micro-user/index-user.js
