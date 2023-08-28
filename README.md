This is simply an angular frontend Test web app.This contains home component as parent and has three child components-start,quiz,reviewresult.This application is written for both computer browser and also for mobile version.For this,media query as well as view port dimensions is used.Guards are used in this webapp to make sure all other routes are locked when not needed.User can enter name and emailid into it,then take the test and review the results. Timer is used here.so the test gets submitted after certain time by itself.User is also given flexibilty to submit the test before the timings.For this use case,interval observable of rxjs is utilised.This observable is unsubscribed in ngondestroy life cycle method.
For this application to facilitate backend,we can either use simply json-server with db.json file or springboot+document database like mongodb combinations.
Json format sample for this project(Backend):
{
  "Details":[
    {
      "Totalquestions":11,
      "Totaltimings":40
    }
  ],
  "Questions":[
    {
      "Qno":1, 
      "question":"Which of the following is a superclass of every class in Java?",
      "option1":"ArrayList",
      "option2":"Object class",
      "option3":"Abstract class",
      "option4":"String"
    }
  ],
  "Answers":[
    {"qno":1, "ans":2}
  ]
}

Only input to be given in this app is to change the rest api url in base_details.ts file.