pm2 kill &&

mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-notification --eval "db.dropDatabase()" &&
mongo -u admin -p dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu --authenticationDatabase admin kajkai-store --eval "db.dropDatabase() && db.getCollection('categories').createIndex( { name: \"text\" } )" &&

pm2 flush &&

pm2 start ./command/micro-notification/index-noti.js &&
pm2 start ./command/micro-search/index-search.js &&
pm2 start ./command/micro-store/index-store.js &&

curl localhost:8085/deleteindex
