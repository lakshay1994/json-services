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

app.get('/getShirtThumbs', function(req, res) {
    res.json({
        images: [{
            id: 1, 
            url: 'https://image.ibb.co/cFhOka/1.jpg',
            shirtName: 'Name1',
            shirtPrice: '450' 
        }, {
            id: 2, 
            url: 'https://image.ibb.co/hP7Cdv/2.jpg',
            shirtName: 'Name2',
            shirtPrice: '850' 
        }, {
            id: 3, 
            url: 'https://image.ibb.co/m2nOka/3.jpg',
            shirtName: 'Name3',
            shirtPrice: '550' 
        }, {
            id: 4, 
            url: 'https://image.ibb.co/jz6G5a/4.jpg',
            shirtName: 'Name4',
            shirtPrice: '499' 
        }, {
            id: 5, 
            url: 'https://image.ibb.co/gvgSBF/5.jpg',
            shirtName: 'Name5',
            shirtPrice: '410' 
        }, {
            id: 6, 
            url: 'https://image.ibb.co/bQP3ka/6.jpg',
            shirtName: 'Name6',
            shirtPrice: '450' 
        }, {
            id: 7, 
            url: 'https://image.ibb.co/goW5yv/7.jpg',
            shirtName: 'Name7',
            shirtPrice: '850' 
        }, {
            id: 8, 
            url: 'https://image.ibb.co/koUErF/8.jpg',
            shirtName: 'Name8',
            shirtPrice: '650' 
        }, {
            id: 9, 
            url: 'https://image.ibb.co/bTiw5a/9.jpg',
            shirtName: 'Name9',
            shirtPrice: '599' 
        }, {
            id: 10,
            url: 'https://image.ibb.co/iHRG5a/10.jpg',
            shirtName: 'Name10',
            shirtPrice: '899' 
        }] 
    });
});

app.get('/getShirt', function(req, res) {
    res.json({
        id: 2,
        url: ['https://image.ibb.co/krgDJv/c.jpg', 'https://image.ibb.co/cyTtJv/b.jpg', 'https://image.ibb.co/khCyka/a.jpg'],
        description: 'Nice color',
        shirtPrice: 550
    });
});

var pg = require('pg');
// app.get('/getDB', function(req, res) {
//     pg.defaults.ssl = true;
//     pg.connect(process.env.DATABASE_URL, function(err, client) {
//     if (err) throw err;
//     console.log('Connected to postgres! Getting schemas...');

//     client
//         .query('SELECT * FROM check123;')
//         .on('row', function(row) {
//         console.log(JSON.stringify(row));
//         res.json(row);
//         });
//     });
// });

app.get('/getDB', function (request, response) {
    pg.defaults.ssl = true;
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
      var shirt_id = request.params.shirt_id;
      console.log("shirt_id", shirt_id)
    client.query('SELECT * FROM shirts where shirt_id=' + shirt_id, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.json(result.rows ); }
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// create table shirts(shirt_id integer, shirt_name text, shirt_description text, shirt_price integer, shirt_thumb text, shirt_img1 text, shirt_img2 text, shirt_img3 text, shirt_img4 text)
// insert into shirts values(1, 'Red checks', 'Jack & Jones OR YORK SHIRT L/S IN' , 1299, 'https://image.ibb.co/hP7Cdv/2.jpg', 'https://image.ibb.co/cyTtJv/b.jpg', 'https://image.ibb.co/khCyka/a.jpg', 'https://image.ibb.co/krgDJv/c.jpg', NULL)