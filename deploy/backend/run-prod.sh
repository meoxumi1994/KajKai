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

aws s3 sync ./prod/build s3://kajkai-backend/prod --delete &&

aws lambda update-function-code --function-name prod-micro-chat --s3-bucket kajkai-backend --s3-key prod/micro-chat.zip &&
aws lambda update-function-code --function-name prod-micro-comment --s3-bucket kajkai-backend --s3-key prod/micro-comment.zip &&
aws lambda update-function-code --function-name prod-micro-notification --s3-bucket kajkai-backend --s3-key prod/micro-notification.zip &&
aws lambda update-function-code --function-name prod-micro-search --s3-bucket kajkai-backend --s3-key prod/micro-search.zip &&
aws lambda update-function-code --function-name prod-micro-store --s3-bucket kajkai-backend --s3-key prod/micro-store.zip &&
aws lambda update-function-code --function-name prod-micro-user --s3-bucket kajkai-backend --s3-key prod/micro-user.zip &&
aws lambda update-function-code --function-name prod-view-chat --s3-bucket kajkai-backend --s3-key prod/view-chat.zip &&
aws lambda update-function-code --function-name prod-view-post --s3-bucket kajkai-backend --s3-key prod/view-post.zip &&
aws lambda update-function-code --function-name prod-view-store --s3-bucket kajkai-backend --s3-key prod/view-store.zip &&
aws lambda update-function-code --function-name prod-view-user --s3-bucket kajkai-backend --s3-key prod/view-user.zip
