var districtController = angular.module("districtController",[])
    .controller('districtController', ['$scope','$http', function ($scope, $http) {
        console.log("District Controller Page!");

        $scope.district;
        $scope.add = function(district){
          var url = 'http://localhost:8001/district';
          $http.post(url, {
            name:$scope.district,

          }).success(function (data, status, headers, config){
            if (!data.error) {
              console.log(data);
            }
            else console.log(data);
          });

        }

    }]
  );
