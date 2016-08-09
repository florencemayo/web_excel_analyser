/**
 * Created by Naamini on 8/9/2016.
 */


var fileController = angular.module("fileController",[])
    .controller('fileController', ['$scope', '$http', 'API_URL', function ($scope, $http, API_URL) {
        $http.get(API_URL+"upload")
            .success(function (data){
                $scope.uploads = data;
            });

        $scope.save = function(data){
            $http.post(API_URL+ "upload", {
                name:$scope.data
            })
                .success(function(data){
                    $scope.uploads.push(data)
                    console.log(data);
                });
        };

        $scope.delete = function(id){
            // $http.post(API_URL+"upload/delete/"+id)
            $http.post(API_URL + "upload" + id, {
                // delete/+id
                name:$scope.file
                })
                .success(function (data){
                    console.log(data);
                    location.reload();
                })
                .error(function (data){
                    console.log(data);
                    alert('Unable to delete');
                });
        };


        $scope.update = function(id){
            $http.post(API_URL + "upload/" + id, {
                name:$scope.file
            })
                .success(function (data){
                    console.log("UPDATED"+data);
                    $scope.uploads.push(data);
                    location.reload();
                });
        };

    }]);
