// Bước 1: npm init
// Bước 2: Cài module express: npm install -s express

// Express Server cho phép tạo web server như HTTP Server
var express = require('express') // import module express
var app = express(); // đại diện cho web server

// Tùy theo URL request (get) mà xử lý
/***** Sử dụng regular expression *****/
// Lưu ý: server thực hiện so sánh từ trên xuống dưới
// (i.e: nếu URL thỏa nhiều điều kiện thì server chỉ thực hiện điều kiện đầu tiên)

/* URL có dạng '/ab?cd' (regular expression) => trả về 1 chuỗi */
app.get('/ab?cd', function(req, res){
    res.send('/ab?cd'); // b ko bắt buộc phải có => abcd,acd
});

/* URL có dạng '/ab+cd' (regular expression) => trả về 1 chuỗi */
app.get('/ab+cd', function(req, res){
    res.send('/ab+cd'); // => b có thể xuất hiện >= 1 lần => abcd,abbcd
});

/* URL có dạng '/ab*cd' (regular expression) => trả về 1 chuỗi */
app.get('/ab*cd', function(req, res){
    res.send('/ab*cd'); // => giữa ab và cd có thể là gì cũng được => abRANDOMcd
});

/* URL có dạng '/ab*cd' (KO là regular expression) 
=> Đặt ký tự đặt biệt trong dấu ([ ]) */
app.get('/ab([*])cd', function(req, res){
    res.send('Not regex: /ab*cd'); // => giữa ab và cd chỉ có thể là *
});

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});