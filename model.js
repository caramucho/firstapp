//const MONGO_URL = process.env.MONGOHQ_URL;
var mongoose = require('mongoose');
//var db = mongoose.connect(MONGO_URL);
var db = mongoose.connect('mongodb://localhost/firstapp');

function validator(v) {
	return v.length > 0;
}

var Post = new mongoose.Schema({
    selector:   { type: String, validate: [validator, "Empty Error"] },
    point:      { type: Array, validate: [validator, "Empty Error"] },
    url:        { type: String, validate: [validator, "Empty Error"] },
    content:    { type: String, validate: [validator, "Empty Error"] },
    created:    { type: Date, default: Date.now }
});

exports.Post = db.model('Post', Post);
