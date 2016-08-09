/**
 * Created by kelvin on 8/7/16.
 */
var locationController = angular.module("locationController",[])
    .controller('locationController', ['$scope','$http', function ($scope, $http) {
        console.log("Location Controller Page!");

        $scope.region;
        $scope.district;

        $scope.save = function(){
          var url = 'http://localhost:8001/#location';
          $http.post(url, {
            nameRegion:$scope.region;

          }).success(function (data, status, headers, config){
            if (!data.error) {
              console.log(data);
            }
            else console.log(data);
          });

        }

        $scope.add = function(){
          var url = 'http://localhost:8001/#location';
          $http.post(url, {
            nameDistrict:$scope.district;

          }).success(function (data, status, headers, config){
            if (!data.error) {
              console.log(data);
            }
            else console.log(data);
          });

        }

    }]
  );
