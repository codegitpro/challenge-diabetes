'use strict';

angular.module('app', []).controller('appController', function ($scope) {

  var ctrl = this;

  var DEMO_EVENTS = [
    { value: 100, time: moment() },
    { value: 155, time: moment() },
    { value: 83, time: moment() },
    { value: 211, time: moment().subtract(1, 'day') },
    { value: 138, time: moment().subtract(1, 'day') },
    { value: 55, time: moment().subtract(1, 'day') },
    { value: 183, time: moment().subtract(2, 'day') },
    { value: 103, time: moment().subtract(2, 'day') },
    { value: 98, time: moment().subtract(3, 'day') }
  ];


  ctrl.helloWorld = 'Hello World!'; // Dashboard welcome message (this can be deleted)

  // Add your AngularJS controller logic here

  // --------------------------------------------
  $scope.today = moment();

  $scope.eventAverge = 0;
  $scope.eventCount = 0;
  $scope.eventPercent = 0;

  $scope.prevAverge = 0;
  $scope.prevCount = 0;
  $scope.prevPercent = 0;

  //***************************************************/
  $scope.getValues = function(){    
    var eventList = [];
    for (let i=0; i< DEMO_EVENTS.length; i++){
      if(DEMO_EVENTS[i].time.date() === $scope.today.date() && DEMO_EVENTS[i].time.month() === $scope.today.month() ){
        eventList.push(DEMO_EVENTS[i].value);
      }
    }
   
    let  eventAverge = 0;
    let  trueCount = 0;
    if(eventList.length !==0 ){
      for (let i=0; i< eventList.length; i++){
        eventAverge += eventList[i];
        if(eventList[i] >= 70 && eventList[i] <= 180)
        {
          trueCount += 1;
        }
      }
      eventAverge /= eventList.length ;
    }
  
    // --------------------------------------------
  
    $scope.eventAverge = Math.round(eventAverge);
    $scope.eventCount = eventList.length;
    if(eventList.length === 0) $scope.eventPercent = 0;
    else $scope.eventPercent = Math.round(trueCount * 100 / eventList.length);
  }

  $scope.getValues();


  
 //***************************************************/
  $scope.prevDate = function () {
    $scope.prevAverge = $scope.eventAverge;
    $scope.prevCount = $scope.eventCount;
    $scope.prevPercent = $scope.eventPercent;

    $scope.today = $scope.today.subtract(1, 'days');
    $scope.getValues();
  }

  //***************************************************/
  $scope.nextDate = function () {
    $scope.prevAverge = $scope.eventAverge;
    $scope.prevCount = $scope.eventCount;
    $scope.prevPercent = $scope.eventPercent;

    $scope.today = $scope.today.add(1, 'days');
    $scope.getValues();
  }

  //***************************************************/
  $scope.getCurrentFormattedDate = function () {
    return $scope.today.format("ddd, D MMM YYYY");
  }
});
