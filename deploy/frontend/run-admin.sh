cp ../../client/config/index.js temp.js && cp config-admin.js ../../client/config/index.js &&
rm -rf admin.kajkai && mkdir admin.kajkai &&

cd ../../client && rm -rf dist &&
cp webpack-configs/wc.admin.production.js webpack.config.js && webpack &&

cp ../deploy/frontend/temp.js ./config/index.js && rm ../deploy/frontend/temp.js &&

cp index.html ../deploy/frontend/admin.kajkai/index.html &&
cp App.css ../deploy/frontend/admin.kajkai/App.css &&
cp cropper.css ../deploy/frontend/admin.kajkai/cropper.css &&
cp -r images-admin ../deploy/frontend/admin.kajkai &&
cp -r dist ../deploy/frontend/admin.kajkai  #&&

aws s3 sync ../deploy/frontend/admin.kajkai s3://kajkai-admin --delete
