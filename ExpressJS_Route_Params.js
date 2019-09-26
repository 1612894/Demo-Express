// Tham số hóa đường dẫn URL

var express = require('express') // import module express
var app = express(); // đại diện cho web server

app.get('/', function(req, res){
    res.send('Hello from Express JS~'); //phản hồi kiểu thông báo từ server
});

/* Định nghĩa URL có tham số */

/***** Thêm tham số id cho URL /products/ => thêm ':<tên tham số>' *****/
/* VD1: localhost:5000/products/prod011 */
app.get('/products/:id', function(req, res){ 
    // Truy xuất tất cả tham số từ URL:
    // res.send(req.params);

    // Truy xuất riêng tham số id từ URL:
    res.send(req.params.id);
});

/***** Thêm nhiều tham số cho URL /users/.../books/... *****/
/* VD2: localhost:5000/users/u001/books/b005 */
app.get('/users/:userId/books/:bookId', function(req, res){ 
    // Truy xuất tất cả các tham số từ URL:
    // res.send(req.params);

    // Truy xuất riêng các tham số từ URL:
    res.send('User ID: ' + req.params.userId + '<br>BookID: ' + req.params.bookId);
});

/***** Thêm nhiều tham số cho URL, ngăn cách các params bằng các ký tự đặt biệt *****/
/* VD3: localhost:5000/flights/VN-KR */
app.get('/flights/:from-:to', function(req, res){
    // Truy xuất tất cả các tham số từ URL:
    // res.send(req.params);

    // Truy xuất riêng các tham số từ URL:
    res.send('From: ' + req.params.from + '<br>To: ' + req.params.to);
});

/* VD4: localhost:5000/planes/Boeing.737 */
app.get('/planes/:name.:id', function(req, res){
    // Truy xuất tất cả các tham số từ URL:
    // res.send(req.params);

    // Truy xuất riêng các tham số từ URL:
    res.send('Name: ' + req.params.name + '<br>ID: ' + req.params.id);
});

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});