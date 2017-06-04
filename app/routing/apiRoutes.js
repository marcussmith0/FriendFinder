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

       //this is evaluating if we are on the first person in the array
       //if we are, the leastDiff will default to the first value of diff

       if(i == 0) {

           leastDiff = diff;
           personIndex = i;

       } else {

        //since we are not on the first person in the array anymore, that means we have a previous difference to 
        //compare our current difference to

           if(diff < leastDiff) {

               leastDiff = diff;
               personIndex = i;

           }

       }

    }

      res.json(friends[personIndex]);
      friends.push(req.body);


  });



};

