var express = require('express');
var cors = require('cors');
var pg = require('pg');
var app = express();
app.use(cors());
app.set('port', (process.env.PORT || 5000));

app.get('/sliderImgUrl', function(req, res) {
    pg.defaults.ssl = true;
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM slider_images', function(err, result) {
            done();
            if (err)
            { console.error(err); res.send("Error " + err); }
            else
            { res.json(result); }
        });
    });
});

app.get('/getShirt', function (request, response) {
    pg.defaults.ssl = true;
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        var shirt_id = request.param('shirt_id');
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

app.get('/getShirtThumbs', function (request, response) {
    pg.defaults.ssl = true;
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT shirt_id, shirt_price, shirt_thumb FROM shirts', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.json( result.rows ); }
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// create table shirts(shirt_id integer, shirt_name text, shirt_description text, shirt_price integer, shirt_thumb text, shirt_img1 text, shirt_img2 text, shirt_img3 text, shirt_img4 text)
// insert into shirts values(1, 'Red checks', 'Jack & Jones OR YORK SHIRT L/S IN' , 1299, 'https://image.ibb.co/hP7Cdv/2.jpg', 'https://image.ibb.co/cyTtJv/b.jpg', 'https://image.ibb.co/khCyka/a.jpg', 'https://image.ibb.co/krgDJv/c.jpg', NULL)