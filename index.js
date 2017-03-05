var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/sliderImgUrl', function(req, res) {
    res.json({
        images: [{
            id: 1, 
            url: 'https://image.ibb.co/bEtw5a/1.jpg'
        }, {
            id: 2, 
            url: 'https://image.ibb.co/hejfWF/2.jpg'
        }, {
            id: 3, 
            url: 'https://image.ibb.co/gP9fWF/3.jpg'
        }] 
    });
});

app.listen(3001);