var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService', function(){


    var self = this;
    this.user =  "SumaChunduri";

    this.nameLength = function(){
         return self.user.length;
    }

})

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    // $scope.name = 'Main';
    // $scope.user = nameService.user;
    // $scope.$watch('user' , function(){
    //     nameService.user = $scope.user;
    // })
    // $log.main = "Property from MainController"; //log is a singleton to save the memory as it works same in every code
    // $log.log($log);
    // $log.log(nameService.user);
    // $log.log(nameService.nameLength());

    $scope.people = [
        {
        name: 'Kavya',
        address: 'D.no:24-3-66/A',
        street: 'R.Agraharam',
        city: 'Guntur',
        zip: '522003'
    },
    {
        name: 'Suma Chunduri',
        address: 'D.no:24-3-66/B',
        street: 'R.Agraharam',
        city: 'Vijayawada',
        zip: '522004'
    },
    {
        name: 'Suma',
        address: 'D.no:24-3-66/C',
        street: 'R.Agraharam',
        city: 'Hyderabad',
        zip: '522005'
    }
]
    $scope.formattedAddress= function(person){
        return person.address + ', ' + person.street + ', ' + person.city + ', ' + person.zip;
    
    }

    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams' , 'nameService',  function($scope, $log, $routeParams, nameService) {
    
    // $scope.num = $routeParams.num;
    // $scope.user = nameService.user;
    // $scope.$watch('user' , function(){
    //     nameService.user = $scope.user;
    // })
    // $log.second = "Property from SecondController";
    // $log.log($log);

 
  
    
}]);

myApp.directive('searchResult', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'directives/searchResult.html',
        replace: false,
        scope:  {
            personObject: "=",
            formattedAddressFunction: "&",
            a= [1,5,10,-1,4,3],
             b=[5,10,-1],
              c=[-1,4,9]

        },

        // link: function(scope, elements, attrs){
        //             console.log("   Linking...");
        //             console.log(scope);
        //             if(scope.personObject.name = 'Suma'){
        //                 elements.removeAttr('class');
        //             }
        //             console.log(elements);
        //         }

        transclude: true
            
        

        
        
    }
});
