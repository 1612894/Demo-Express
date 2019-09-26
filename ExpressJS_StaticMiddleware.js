// Cho phép trả về cho client những tập tin tĩnh (static file) từ server

var express = require('express') // import module express
var app = express(); // đại diện cho web server

/*** Cách dùng hàm static (middleware của express) ***/
// => định nghĩa thư mục chứa các file tĩnh để server tự tìm và trả về
app.use(express.static(__dirname + '/static_files'));

/* Nếu trong thư mục chứa file tĩnh có 1 file tên index.html thì server mặc định sẽ trả về file đó
vì quy định các file html tên index sẽ chính là trang chủ */
app.get('/', function(req, res){
    res.send('Hello Thi! Welcome to our shop!');
});

// Nếu file html có sử dụng các file bootstrap css, jquery, popper.js:
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});