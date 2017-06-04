var path = require("path");

var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var userScores = req.body.scores;
    var personIndex = 0;
    var leastDiff = 0;
    

    for(i = 0; i < friends.length; i++) {
       var diff = 0;

       for(j = 0; j < userScores.length; j++) {

           if(parseInt(userScores[j]) === parseInt(friends[i].scores[j])) {

                diff += 0;

           } else {

               diff += Math.abs(userScores[j] - friends[i].scores[i]);

           }  

       }

       if(i == 0) {

           leastDiff = diff;
           personIndex = i;

       } else {

           if(diff < leastDiff) {

               leastDiff = diff;
               personIndex = i;

           }

       }

    }

      console.log("this returned friends");
      console.log(friends[personIndex]);

      res.json(friends[personIndex]);
      friends.push(req.body);


  });



};

