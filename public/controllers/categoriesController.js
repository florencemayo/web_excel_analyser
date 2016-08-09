/**
 * Created by Florence on 8/7/16.
 */
var categoriesController = angular.module("categoriesController",[])
    .controller('categoriesController', ['$scope', '$http', 'API_URL', function ($scope, $http, API_URL) {
        console.log("Categories controller page");

        //$scope.categories= [];

        $scope.init = function(){
          $http.get(API_URL + "categories")
            .success(function (data, status, headers, config){
                console.log(data)
        	  $scope.categories = data;
          });
        }; 

        /*$scope.saveCategory = function() {
          $http.post(API_URL + "categories", {
             name: $scope.category.name
          }).success(function(data, status, headers, config) {
            $scope.categories.push(data);
            $scope.category='';
          }); 	
        };*/

        $scope.init();
        $scope.save = function(category){
          $http.post(API_URL + "categories", {
             name: $scope.category
           })
            .success(function(data, status, headers, config) {
              $scope.categories.push(data);
            });
        }

    }]);
