/**
 * Created by Naamini on 8/9/2016.
 */


var fileController = angular.module("fileController",[])
    .controller('fileController', ['$scope', '$http', 'API_URL', function ($scope, $http, API_URL) {
        $http.get(API_URL+"upload")
            .success(function (file){
                $scope.uploads = file;
            });

        $scope.save = function(files){ // metadata
            $http.post(API_URL+ "upload", {
                name:$scope.file
            })
                .success(function(file){
                    $scope.metadatas.push(file)
                });
        };

        $scope.delete = function(id){
            // $http.post(API_URL+"upload/delete/"+id)
            $http.post(API_URL + "upload" + id, {
                // delete/+id
                name:$scope.file
                })
                .success(function (file){
                    console.log(file);
                    location.reload();
                })
                .error(function (file){
                    console.log(file);
                    alert('Unable to delete');
                });
        };


        $scope.update = function(id){
            $http.post(API_URL + "upload/" + id, {
                name:$scope.file
            })
                .success(function (file){
                    console.log("UPDATED"+file);
                    $scope.uploads.push(file);;
                    location.reload();
                });
        };

    }]);
