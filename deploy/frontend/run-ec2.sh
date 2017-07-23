cp ../../client/config/index.js temp.js && cp config-ec2.js ../../client/config/index.js &&
rm -rf kajkai.com && mkdir kajkai.com &&

cd ../../client && rm -rf dist &&
cp webpack-configs/wc.production.js webpack.config.js && webpack &&

cp ../deploy/frontend/temp.js ./config/index.js && rm ../deploy/frontend/temp.js &&

cp index.html ../deploy/frontend/kajkai.com/index.html &&
cp App.css ../deploy/frontend/kajkai.com/App.css &&
cp cropper.css ../deploy/frontend/kajkai.com/cropper.css &&
cp -r images ../deploy/frontend/kajkai.com &&
cp -r dist ../deploy/frontend/kajkai.com &&

aws s3 sync ../deploy/frontend/kajkai.com s3://kajkai-frontend --delete
