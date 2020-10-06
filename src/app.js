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

});
