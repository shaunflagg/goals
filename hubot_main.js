



 module.exports = function(robot) {



    robot.respond(/Lemonade was a popular drink and it still is/, function(res) {



        return res.send("I get more props and stunts than my man Bruce Willis");


 });

     robot.respond(/Bot what time is it?/, function(res) {

         var myDate = new Date();

         return res.send("It is " + myDate);


     });


     robot.respond(/Hi sillyrobot/, function(res) {

         var myDate = new Date();

         /* hour is before noon */
         if ((myDate.getHours() - 5) < 12) {

             return res.send("Good Morning!");

         }
         else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
         if ((myDate.getHours() - 5) >= 12 && (myDate.getHours() - 5) <= 17) {
             return res.send("Good Afternoon!");
         }
         else  /* the hour is after 5pm, so it is between 6pm and midnight */
         if ((myDate.getHours() - 5) > 17 && (myDate.getHours() - 5) <= 24) {
             return res.send("Good Evening!");
         }
         else  /* the hour is not between 0 and 24, so something is wrong */
         {
             return res.send("Hello silly human!");
         }


     });

  //`.hear` command listens for a specific phrase anywhere in the Slack room. You don't have to mention
  //your Hubot in order to get a response.
  robot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });
//`.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions
//the Hubot using `@`, or sends a direct message
robot.respond(/What's your favorite food?/, function(res) {
  return res.send("I'm a robot--I don't eat food!");
});

robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "Hubot") {
  return msg.send("You're not Hubot--I'm Hubot!");
} else {
  return msg.reply("Nice to meet you, " + name + "!");
}
});


     robot.respond(/Random message/, function(res) {


         var myClassList = [
             "aaronkaltman",
             "bigddawg",
             "bnonni",
             "slackerjason",
             "amincey",
             "eric_zbd",
             "fmaffett",
             "gabby",
             "johnmcswain",
             "kbicknese",
             "khai-e",
             "kin",
             "rachelparks"  ];

         var randomName = myClassList[Math.floor(myClassList.length * Math.random())];

         return res.send("@" + randomName  + " Hello there. Hope you are having a great day! :)");

     });

     robot.hear(/How's the weather?/, function(res) {

         var http = require('http');

         // receive function
         function get_json(url, callback) {
             http.get(url, function(res) {
                 var body = '';
                 res.on('data', function(chunk) {
                     body += chunk;
                 });

                 res.on('end', function() {
                     var response = JSON.parse(body);
// call function
                     callback(response);
                 });
             });
         }



         var mydata = get_json("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=c91c462c3d0f8ed64cb24675bb83c7a4", function (resp) {
             return resp;
         });

         return res.send(mydata);

     });



 };
