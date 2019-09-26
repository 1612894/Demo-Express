// Bước 1: npm init
// Bước 2: Cài module express: npm install -s express

// Express Server cho phép tạo web server như HTTP Server
var express = require('express') // import module express
var app = express(); // đại diện cho web server

// Tùy theo URL request (get) mà xử lý
/* URL là: '/' => trả về 1 chuỗi */
app.get('/', function(req, res){
    res.send('Hello from Express JS~'); //phản hồi kiểu thông báo từ server
});

/* URL là: '/json' => trả về 1 biến kiểu json */
app.get('/json', function(req, res){
    var my_json = {
        name: 'Thi',
        age: 21
    };
    res.json(my_json); //phản hồi kiểu json từ server
});

/* URL là: '/html' => trả về 1 trang web html */
app.get('/html', function(req, res){
    // sendFile => Trả về file html (truyền vào đường dẫn tới file)
    /* __dirname: đường dẫn thư mục hiện hành */
    res.sendFile(__dirname + '/test.html');
});

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});