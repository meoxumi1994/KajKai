cp ./prod/config/micro-chat.js ../../command/micro-chat/config/commonConfig.js &&
cp ./prod/config/micro-comment.js ../../command/micro-comment/config/commonConfig.js &&
cp ./prod/config/micro-notification.js ../../command/micro-notification/config/commonConfig.js &&
cp ./prod/config/micro-search.js ../../command/micro-search/config/commonConfig.js &&
cp ./prod/config/micro-store.js ../../command/micro-store/config/commonConfig.js &&
cp ./prod/config/micro-user.js ../../command/micro-user/config/commonConfig.js &&
cp ./prod/config/view-chat.js ../../query/view-chat/config/commonConfig.js &&
cp ./prod/config/view-post.js ../../query/view-post/config/commonConfig.js &&
cp ./prod/config/view-store.js ../../query/view-store/config/commonConfig.js &&
cp ./prod/config/view-user.js ../../query/view-user/config/commonConfig.js &&

rm -rf ./prod/build && mkdir ./prod/build &&

cd ../../command/micro-chat && webpack &&
zip -r ../../deploy/backend/prod/build/micro-chat.zip node_modules es6.js &&

cd ../micro-comment && webpack &&
zip -r ../../deploy/backend/prod/build/micro-comment.zip node_modules es6.js &&

cd ../micro-notification && webpack &&
zip -r ../../deploy/backend/prod/build/micro-notification.zip node_modules es6.js &&

cd ../micro-search && webpack &&
zip -r ../../deploy/backend/prod/build/micro-search.zip node_modules es6.js &&

cd ../micro-store && webpack &&
zip -r ../../deploy/backend/prod/build/micro-store.zip node_modules es6.js &&

cd ../micro-user && webpack &&
zip -r ../../deploy/backend/prod/build/micro-user.zip node_modules es6.js &&

cd ../../query/view-chat && webpack &&
zip -r ../../deploy/backend/prod/build/view-chat.zip node_modules es6.js &&

cd ../view-post && webpack &&
zip -r ../../deploy/backend/prod/build/view-post.zip node_modules es6.js &&

cd ../view-store && webpack &&
zip -r ../../deploy/backend/prod/build/view-store.zip node_modules es6.js &&

cd ../view-user && webpack &&
zip -r ../../deploy/backend/prod/build/view-user.zip node_modules es6.js &&
