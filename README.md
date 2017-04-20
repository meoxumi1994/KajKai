0. Nếu dùng Windows, thêm 2 biến môi trường:
- `./node_modules/.bin`
- `../node_modules/.bin`
1. Terminal / Command Prompt đến `thư mục đầu sỏ` chạy câu lệnh:
  - `npm install` : cài những cái cần phải cài trong `package.json`
2. Terminal / Command Prompt đến `thư mục đầu sỏ / client` chạy câu lệnh:
  - `webpack` : build các file bundle script dựa vào `webpack.config.js`
3. Dùng một Terminal / Command Prompt khác tại `thư mục đầu sỏ` chạy câu lệnh
  - `nodemon server` : khởi động server
3. Mở nhiều tab `localhost:3000/demo` và login `username === password`
