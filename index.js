var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.set('port', (process.env.PORT || 5000));
app.get('/sliderImgUrl', function(req, res) {
    res.json({
        images: [{
            id: 1, 
            url: 'https://image.ibb.co/cOt4Qa/4.jpg'
        }, {
            id: 2, 
            url: 'https://image.ibb.co/crFvWF/5.jpg'
        }, {
            id: 3, 
            url: 'https://image.ibb.co/hQRr5a/6.jpg'
        }] 
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
