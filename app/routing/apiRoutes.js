var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    friends.push(req.body);

    var userScores = friends[friends.length - 1].scores;
    var personIndex = 0;
    var leastDiff = 0;
    var diff = 0;

    for(i = 0; i < friends.length; i++) {

       for(j = 0; j < userScores.length; j++) {

           if(userScores[j] === friends[i].scores[j]) {

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

      res.json(friends[i]);

  });

};

