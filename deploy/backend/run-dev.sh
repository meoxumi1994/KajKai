cp ./dev/config/micro-chat.js ../../command/micro-chat/config/commonConfig.js &&
cp ./dev/config/micro-comment.js ../../command/micro-comment/config/commonConfig.js &&
cp ./dev/config/micro-notification.js ../../command/micro-notification/config/commonConfig.js &&
cp ./dev/config/micro-search.js ../../command/micro-search/config/commonConfig.js &&
cp ./dev/config/micro-store.js ../../command/micro-store/config/commonConfig.js &&
cp ./dev/config/micro-user.js ../../command/micro-user/config/commonConfig.js &&
cp ./dev/config/view-chat.js ../../query/view-chat/config/commonConfig.js &&
cp ./dev/config/view-post.js ../../query/view-post/config/commonConfig.js &&
cp ./dev/config/view-store.js ../../query/view-store/config/commonConfig.js &&
cp ./dev/config/view-user.js ../../query/view-user/config/commonConfig.js &&

rm -rf ./dev/build && mkdir ./dev/build &&

cd ../../command/micro-chat && webpack &&
zip -r ../../deploy/backend/dev/build/micro-chat.zip node_modules es6.js &&

cd ../micro-comment && webpack &&
zip -r ../../deploy/backend/dev/build/micro-comment.zip node_modules es6.js &&

cd ../micro-notification && webpack &&
zip -r ../../deploy/backend/dev/build/micro-notification.zip node_modules es6.js &&

cd ../micro-search && webpack &&
zip -r ../../deploy/backend/dev/build/micro-search.zip node_modules es6.js &&

cd ../micro-store && webpack &&
zip -r ../../deploy/backend/dev/build/micro-store.zip node_modules es6.js &&

cd ../micro-user && webpack &&
zip -r ../../deploy/backend/dev/build/micro-user.zip node_modules es6.js &&

cd ../../query/view-chat && webpack &&
zip -r ../../deploy/backend/dev/build/view-chat.zip node_modules es6.js &&

cd ../view-post && webpack &&
zip -r ../../deploy/backend/dev/build/view-post.zip node_modules es6.js &&

cd ../view-store && webpack &&
zip -r ../../deploy/backend/dev/build/view-store.zip node_modules es6.js &&

cd ../view-user && webpack &&
zip -r ../../deploy/backend/dev/build/view-user.zip node_modules es6.js &&

cd ../../deploy/backend &&

cp ./dev/src/micro-chat.js ../../command/micro-chat/config/commonConfig.js &&
cp ./dev/src/micro-comment.js ../../command/micro-comment/config/commonConfig.js &&
cp ./dev/src/micro-notification.js ../../command/micro-notification/config/commonConfig.js &&
cp ./dev/src/micro-search.js ../../command/micro-search/config/commonConfig.js &&
cp ./dev/src/micro-store.js ../../command/micro-store/config/commonConfig.js &&
cp ./dev/src/micro-user.js ../../command/micro-user/config/commonConfig.js &&
cp ./dev/src/view-chat.js ../../query/view-chat/config/commonConfig.js &&
cp ./dev/src/view-post.js ../../query/view-post/config/commonConfig.js &&
cp ./dev/src/view-store.js ../../query/view-store/config/commonConfig.js &&
cp ./dev/src/view-user.js ../../query/view-user/config/commonConfig.js &&

aws s3 sync ./dev/build s3://kajkai-backend/dev --delete
