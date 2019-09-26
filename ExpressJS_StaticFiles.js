// Cho phép trả về cho client những tập tin tĩnh (static file) từ server

var express = require('express') // import module express
var app = express(); // đại diện cho web server

app.get('/', function(req, res){
    res.send('Hello Thi! Welcome to our shop!');
});

/*** Cách thủ công (ko dùng hàm middleware của express) ***/
app.get('/test.html', function(req, res){
    res.sendFile(__dirname + '/test.html');
});

// Phải trả về ảnh có trong file test.html */
app.get('/AlbumCover-MapOfTheSoul.jpg', function(req, res){
    res.sendFile(__dirname + '/AlbumCover-MapOfTheSoul.jpg');
});

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});