var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
//    var collection = db.get('userlist');
	var collection = db.collection('userlist');

    console.log("in user collection " +  collection);


    collection.find().toArray(function (e, docs) {
        if (e) {
            console.log(e);
        }
        else {
        	console.log("Found:", docs);
        	res.send(docs);
        }

    })

});


router.post('/adduser', function(req, res) {

    var db = req.db;

    // Get the documents collection
    var collection = db.collection('userlist');

    console.log(req.body);
   
    console.log("in add user collection ");


    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });

  });

module.exports = router;

