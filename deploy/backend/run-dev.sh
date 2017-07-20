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

aws s3 sync ./dev/build s3://kajkai-backend/dev --delete
