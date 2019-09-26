// Middleware: cho phép thực hiện các hàm trung gian tiền/hậu xử lý dữ liệu trước/sau khi server nhận/trả về kết quả

var express = require('express') // import module express
var app = express(); // đại diện cho web server

// Cách 1:
/* Định nghĩa hàm middleware */
function myMiddleware (req, res, next){
    console.log('Hello from my Middleware 1!');

    // Chia sẻ các biến giữa các hàm middleware ra ngoài
    // => Dùng res.locals.<tên biến>
    res.locals.myString = 'pqthi'

    next(); //chuyển tiếp cho các hàm xử lý bên dưới
}

/* Gọi hàm middleware */
app.use(myMiddleware);

// Cách 2:
/* Định nghĩa hàm middleware trong hàm get */
app.use(function (req, res, next){
    console.log('Hello from my Middleware 2!');
    next(); //chuyển tiếp cho các hàm xử lý bên dưới
});

/* Khi client request URL '/' thì server sẽ gọi *các* hàm myMiddleware trước */
app.get('/', function(req, res){
    res.send('Hello Thi! ' + res.locals.myString);
});

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});