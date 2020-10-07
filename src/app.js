'use strict';

angular.module('app', []).controller('appController', function ($scope) {

  var ctrl = this;

  const DEMO_EVENTS = [
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
  $scope.timeFormat = "ddd, D MMM YYYY"

  $scope.eventAverge = 0;
  $scope.eventCount = 0;
  $scope.eventPercent = 0;

  $scope.prevAverge = 0;
  $scope.prevCount = 0;
  $scope.prevPercent = 0;

  //***************************************************/
  $scope.getFormmatedDateString = function(date) {
    return date.format($scope.timeFormat);
  }

  $scope.getValues = function(curDate){    
    const eventList = DEMO_EVENTS.reduce((t, e) => 
      $scope.getFormmatedDateString(e.time) === $scope.getFormmatedDateString(curDate)? [...t, e.value] : t
    , []);
   
    let eventAverge = 0,
        trueCount = 0,
        eventPercent = 0;
    
    if(eventList.length !==0 ){
      trueCount = eventList.filter(e => e >= 70 && e <= 180).length;
      eventAverge = eventList.reduce((a,b) => a + b, 0) / eventList.length;
    }
  
    // --------------------------------------------
  
    $scope.eventAverge = Math.round(eventAverge);
    $scope.eventCount = eventList.length;
    $scope.eventPercent = eventList.length ? Math.round(trueCount * 100 / eventList.length) : eventPercent;
  }

  $scope.savePrev = function() {
    [$scope.prevAverge, $scope.prevCount, $scope.prevPercent] = [$scope.eventAverge, $scope.eventCount, $scope.eventPercent];
  }
  
 //***************************************************/
  $scope.handleDate = function (type) {
    if(type === 'next') {
      $scope.today = $scope.today.add(1, 'days');
    } else if(type === 'prev') {
      $scope.today = $scope.today.subtract(1, 'days');
    } else {
      console.log("type error!");
      return
    }
    $scope.savePrev();
    $scope.getValues($scope.today);
  }

  //***************************************************/
  $scope.getCurrentFormattedDate = function () {
    return $scope.getFormmatedDateString($scope.today);
  }

  $scope.init = function() {
    $scope.getValues($scope.today);
  }

  $scope.init();
});
