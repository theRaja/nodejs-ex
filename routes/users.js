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

        //Close connection
      	db.close();

    })
/*
    collection.find({},{},function(e,docs){
    	console.log("E " + e);
    	console.log("DOCS  " + docs);
        res.json(docs);
    });

 */
});

module.exports = router;

