pm2 kill &&

mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-comment --eval "db.dropDatabase()" &&

pm2 flush &&

pm2 start ./command/micro-socket/index-socket.js &&
pm2 start ./command/micro-comment/index-comment.js