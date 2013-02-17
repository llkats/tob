var http = require('http'),
 express = require('express'),
     app = express(),
     pub = __dirname + '/public',
  assert = require('assert');


app.use(app.router);
app.use(express.bodyParser());
app.use(express.static(pub));
app.use(express.errorHandler());

app.set('views', __dirname + '/lib/views');
app.set('view engine', 'jade');


var list = [{
    "info" : "HHhH by Laurent Binet",
     "url" : "http://www.barnesandnoble.com/w/hhhh-laurent-binet/1110779344"
  }, {
    "info" : "The Round House by Louise Erdrich",
     "url" : "http://www.barnesandnoble.com/w/the-round-house-louise-erdrich/1108939199?ean=9780062065261"
  }, {
    "info" : "Gone Girl by Gillian Flynn",
     "url" : "http://www.barnesandnoble.com/w/gone-girl-gillian-flynn/1105608095?ean=9780307588388"
  }, {
    "info" : "The Fault in Our Stars by John Green",
     "url" : "http://www.barnesandnoble.com/w/the-fault-in-our-stars-john-green/1104045488?ean=9781101569184&amp;itm=1&amp;usri=the+fault+in+our+stars"
  }, {
    "info" : "Arcadia by Lauren Groff",
     "url" : "http://www.barnesandnoble.com/w/arcadia-lauren-groff/1101556584?ean=9781401342784&amp;itm=1&amp;usri=arcadia+"
  }, {
    "info" : "How Should a Person Be? by Sheila Heti",
     "url" : "http://www.barnesandnoble.com/w/how-should-a-person-be-sheila-heti/1111872185?ean=9781429943482&amp;itm=1&amp;usri=how+should+a+person+be%3f"
  }, {
    "info" : "May We Be Forgiven by A.M. Homes",
     "url" : "http://www.barnesandnoble.com/w/may-we-be-forgiven-am-homes/1108892752?ean=9781101601143&amp;itm=1&amp;usri=may+we+be+forgiven+"
  }, {
    "info" : "The Orphan Master's Son by Adam Johnson",
     "url" : "http://www.barnesandnoble.com/w/orphan-masters-son-adam-johnson/1100054498?ean=9780679643999&amp;itm=1&amp;usri=the+orphan+master%E2%80%99s+son+"
  }, {
    "info" : "Ivyland by Miles Klee",
     "url" : "http://www.barnesandnoble.com/w/ivyland-miles-klee/1108355924?ean=2940014773027&amp;itm=1&amp;usri=ivyland+"
  }, {
    "info" : "Bring Up the Bodies by Hilary Mantel",
     "url" : "http://www.barnesandnoble.com/w/bring-up-the-bodies-hilary-mantel/1108185320?ean=9781429947657&amp;itm=1&amp;usri=bring+up+the+bodies+"
  }, {
    "info" : "The Song of Achilles by Madeline Miller",
     "url" : "http://www.barnesandnoble.com/w/the-song-of-achilles-madeline-miller/1103167914?ean=9780062060631&amp;itm=1&amp;usri=the+song+of+achilles+"
  }, {
    "info" : "Dear Life by Alice Munro",
     "url" : "http://www.barnesandnoble.com/w/dear-life-alice-munro/1108939524?ean=9780307961044&amp;itm=1&amp;usri=dear+life+"
  }, {
    "info" : "Where'd You Go Bernadette by Maria Semple",
     "url" : "http://www.barnesandnoble.com/w/whered-you-go-bernadette-maria-semple/1106244241?ean=9780316204286&amp;itm=1&amp;usri=where%E2%80%99d+you+go+bernadette+"
  }, {
    "info" : "Beautiful Ruins by Jess Walter",
     "url" : "http://www.barnesandnoble.com/w/the-beautiful-ruins-jess-walter/1103427003?ean=9780062098085&amp;itm=1&amp;usri=beautiful+ruins+"
  }, {
    "info" : "Building Stories by Chris Ware",
     "url" : "http://www.barnesandnoble.com/w/building-stories-chris-ware/1109722191?ean=9780375424335"
  }, {
    "info" : "Fobbit by David Abrams",
     "url" : "http://www.barnesandnoble.com/w/fobbit-david-abrams/1109170055?ean=9780802194084&amp;itm=1&amp;usri=fobbit+"
  }, {
    "info" : "Billy Lynn's Long Halftime Walk by Ben Fountain",
     "url" : "http://www.barnesandnoble.com/w/billy-lynns-long-halftime-walk-ben-fountain/1106580295?ean=9780062096821&amp;itm=1&amp;usri=billy+lynn%E2%80%99s+long+halftime+walk+"
  }, {
    "info" : "The Yellow Birds by Kevin Powers",
     "url" : "http://www.barnesandnoble.com/w/the-yellow-birds-kevin-powers/1108616399?ean=9780316219358&amp;itm=1&amp;usri=the+yellow+birds+"
  }
];


var simple = { "hi" : "one"};


app.get('/', function(req, res) {

  res.render('index', {list: list});

});

var port = process.env.PORT || 3000;
app.listen(port);
