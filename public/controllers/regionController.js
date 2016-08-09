/**
 * Created by kelvin on 8/7/16.
 */
var regionController = angular.module("regionController",[])
    .controller('regionController', ['$scope','$http', function ($scope, $http) {
        console.log("Region Controller Page!");

        $scope.region;
        $scope.save = function(region){
          var url = 'http://localhost:8001/region';
          $http.post(url, {
            name:$scope.region,

          }).success(function (data, status, headers, config){
            if (!data.error) {
              console.log(data);
            }
            else console.log(data);
          });

        }

    }]
  );
