var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', '$log', '$filter', function($scope, $timeout, $log, $filter, $resource) {
    
   $scope.handle = "";
   $scope.characters = 5;
   $scope.lowerCaseHandle = function(){
       return $filter('lowercase')($scope.handle);
   };
   $scope.rules = [

       { rulename: "Must be 5 characters" },
       { rulename: "Must not be used elsewhere" },
       { rulename: "Perfect!!" }
   ];
   $scope.alertClicked = function(){
       alert("Clicked!!")
   }
   $scope.name = "Suma";

   $log.log($scope.rules);

   
//    $timeout ( function(){

//     $scope.handle = "NewTwitterHandle"
//     $log.log("Scope chaged!");

//    }, 3000);


//    $scope.$watch('handle', function(newValue, oldValue){
//       $log.info("Changed!");
//        $log.log("oldValue:" + oldValue);
//        $log.log("newValue:" + newValue);
//    })
    
  

}]);




var things = [
    1,
    '2',
    function(){
        alert("Hello World!!");
    }
]

//things[2]();