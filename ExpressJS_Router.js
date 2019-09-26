// Router là module cho phép tách các dạng URL thành các file riêng biệt để xử lý
// VD: /products: liên quan tới sản phẩm, /cart: liên quan tới giỏ hàng

var express = require('express') // import module express
var app = express(); // đại diện cho web server

app.get('/', function(req, res){
    res.send('Hello Thi! Welcome to our shop!');
});

/* Thư mục hiện hành: ./DemoExpress */
// Gọi các URL có tiền tố '/products' đã được tách ra file '../routes/products.js':
var productRouter = require('../routes/products');

// Đối với các URL có tiền tố '/products' thì sẽ xử lý bằng biến productRouter
app.use('/products', productRouter);

// Gọi các URL có tiền tố '/cart' đã được tách ra file '../routes/cart.js':
var cartRouter = require('../routes/cart');

// Đối với các URL có tiền tố '/products' thì sẽ xử lý bằng biến productRouter
app.use('/cart', cartRouter);

// listen => Start server
app.listen(5000, function(){
    console.log('Server is listening on port 5000...'); //thông báo start server thành công
});