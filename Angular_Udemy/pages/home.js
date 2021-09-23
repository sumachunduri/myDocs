var homeApp = angular.module('homeApp', ['ngMessages', 'ngResource'])


	homeApp.controller('homeController', ['$scope', function($scope){
		console.log($scope)
		$scope.checkSubArray = checkSubArray;
		$scope.city = "Guntur"

	 //	var a= [1,5,10,-1,4,3];
	 $scope.a = [];
	 $scope.b =[];
	 $scope.result= "";
	 function checkSubArray(a,b){
		 var count =0;

		 
			for(var i=0; i<b.length; i++){
				console.log("Entered1")
                for(var j=0; j<a.length; j++){
                   console.log("Entered2")
					if(b[i] == a[j]){
					 count++;
				 }
				}
			}
			console.log(count);
			if(count == b.length){
				result= "Yes SubArray";
			}
		}
	}]);
        
	
