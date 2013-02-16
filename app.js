      var MongoClient = require('mongodb').MongoClient,
          Db = require('mongodb').Db,
      Server = require('mongodb').Server,
      Connec = require('mongodb').Connection,

ReplSetServers = require('mongodb').ReplSetServers,
      ObjectID = require('mongodb').ObjectID,
        Binary = require('mongodb').Binary,
     GridStore = require('mongodb').GridStore,
          Code = require('mongodb').Code,
          BSON = require('mongodb').pure().BSON,

        http = require('http'),
     express = require('express'),
         app = express(),
         pub = __dirname + '/public',
      assert = require('assert');

var host = 'localhost';
var port = Connec.DEFAULT_PORT;
var   db = new Db('tob-checklist', new Server("127.0.0.1", 27017,
  {auto_reconnect: false, poolSize: 4}), {w:0, native_parser: false});
// var mongoclient = new MongoClient(new Server("localhost", 27017, {native_parser: true}));

// var ObjectID = db.bson_serializer.ObjectID;

// app.use(app.router);
app.use(express.bodyParser());
app.use(express.static(pub));
app.use(express.errorHandler());
// app.use(express.cookieSession({'secret': 'your mom'}));

app.set('views', __dirname + '/lib/views');
app.set('view engine', 'jade');


var list = {
    "_id" : 1,
  "books" : [{
    "info" : "HHhH by Laurent Binet",
     "url" : "http://www.barnesandnoble.com/w/hhhh-laurent-binet/1110779344"
  }
]};

var simple = { "hi" : "one"};

db.open(function(err, db) {
  db = db.db('tob-checklist');
  db.collection('test').insert(list, {w:1}, function(err, result) {});
  // db.collection('test').find({_id: 1}, function(err, cursor) {
  //   cursor.toArray(function(err, items) {
  //     db.close();
  //   });
  // });
});


app.get('/', function(req, res) {
  var list;

  // mongoclient.open(function(err, db) {
  //   db = mongoclient.db('tob-checklist-tests');
  //   list = db.collection('book-list');

  //   // mongoclient.close();
  // });

  res.render('index', {list: list});
  // res.send(list);
});

app.post('/signup', function(req, res) {
  console.log(req.body.signup.email);
  console.log(req.body.signup.password);
});

app.post('/login', function(req, res) {
  console.log(req);
});

app.listen(3000);
