pm2 kill &&

# mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-user --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-store --eval "db.dropDatabase() && db.getCollection('categories').createIndex( { name: \"text\" } )" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-comment --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-chat --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-notification --eval "db.dropDatabase()" &&

pm2 flush &&
# pm2 start ./command/micro-user/index-user.js &&
pm2 start ./command/micro-store/index-store.js &&
pm2 start ./command/micro-socket/index-socket.js &&
pm2 start ./command/micro-comment/index-comment.js &&
pm2 start ./command/micro-chat/index-chat.js &&
pm2 start ./command/micro-search/index-search.js &&
pm2 start ./command/micro-notification/index-notification.js
