// Xử lý và thông báo các lỗi:
// 404 - Not found: URL không tồn tại (chưa được định nghĩa)
// 500 - Internal Server Error

var express = require('express') // import module express
var app = express(); // đại diện cho web server

app.get('/', function(req, res){
    res.send('Hello Thi! Welcome to our shop!');
});

app.get('/error', function(req, res){
    res.send(req.locals.myErrorMessage);
});

// Xử lý lỗi 404 Not found => khai báo hàm middleware để thông báo lỗi
app.use(function(req, res){
    res.status(404).send('Error: Request not found!');
});

// Xử lý lỗi 500 - Internal Server Error => khai báo hàm middleware để thông báo lỗi
app.use(function(error, req, res, next){
    console.log(error)
    res.status(500).send('Error: Internal Server Error!');
});

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});