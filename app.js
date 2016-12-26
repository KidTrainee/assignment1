(function(){
'use strict';

angular.module('lunchCheckerApp',[])
  .controller('lunchCheckerController', lunchCheckerController);

lunchCheckerController.$inject = ['$scope'];

function lunchCheckerController($scope){
  $scope.dishList = "";


  $scope.checkTooMuch = function (){
    var dishesArr = [];
    var checkedArr = [];
    var validating = false;
    $scope.customColor="green";
    dishesArr = splitString($scope.dishList, ',');
console.log("dishesArr", dishesArr);
    checkedArr = checkingArr(dishesArr);
console.log("checkedArr", checkedArr);
    validating = validateArrLength(checkedArr, 3);
  console.log(validating);

    if($scope.dishList === ""){
      $scope.alert = "Please enter data first";
      //$scope.myStyle = {color:'red'};
      $scope.customColor = "red";
    } else if ($scope.dishList !== "" && !validating){
      $scope.alert = "Too much!";
    } else {
      $scope.alert = "Enjoy!";
    };
  };

  function splitString(stringToSplit, separator){
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
  };

  function validateArrLength (array, maxLength){
    var count = array.length;
    if (count < (maxLength + 1)){
      return true;
    } else {
      return false;
    };
  };

  function checkingArr (array){
    for(var i = 0; i < array.length; i++){
      if( array[i] === ""){
        array.splice(i,1);
        i=i-1;
      };
    };
    return array;
  };
};
})()
