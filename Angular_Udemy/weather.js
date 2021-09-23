//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES
weatherApp.config(function($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })

    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

//SERVICES

weatherApp.service('cityService', function(){
    this.city = "";
})

//CONTROLLERS
weatherApp.controller('homeController', ['$scope',  'cityService', function($scope, cityService){
  $scope.city = cityService.city;
   $scope.$watch('city', function(){
    cityService.city =  $scope.city;    
   })
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource','$routeParams', function($scope,  cityService, $resource, $routeParams){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 1;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?id=kchundur&appid=0d84a02877590537efcd84b238a9b3aa", {get: {method: "JSONP"}});
   
            $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days})
            console.log($scope.weatherResult);
            
            $scope.covertToDate = covertToDate;
            $scope.covertToFarenheit = covertToFarenheit;
            $scope.checkSubArray = checkSubArray;
            function covertToDate(dt){
                return new Date(dt * 1000);
                
            }
            function covertToFarenheit(degK){
                return  Math.round((1.8 * (degK - 273)));
                
            }
            checkSubArray = function (a,b,c){
                var count1 =0;
                var flag1= false;
                  for(var i=0,j=0; i<b.length,j<a.length; i++,J++){
                            if(b[i] == a[j]){
        
                                for(var n=1; n<b.length-1; n++)
                                 if(b[i+n] == a[j+n] )
                                count++;
                            }

                        }
                     for(j=0; j<a.length)
                        b[0] 
                flag= a.indexOf(b[0])
                 
                if(flag !== -1){
                     flag1=a.indexOf(b[1]);
                     flag2=a.indexOf(b[2]);
                     if(flag1== flag +1 && flag2 == flag1+1){
                    
                        return true;
                    
                }
                else{
                    return "the elements do esxist but not in squence"
                }

                }
                else{
                    ret
                }
               
                if(count1== b.length){
                     flag1= true;
                }
                var count2 =0;
                var flag2= false;
                for(var i =0; i <c.length; i++){
                        for(var j=0; j<a.length; i++){
                            if(c[i] == a[j]){
                                count2++;
                            }
                        }
                }
                if(count2== c.length){
                     flag2= true;
                }
    
                return (flag1, flag2);
            }
    
    }]);

