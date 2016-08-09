/**
 * Created by Florence on 9/7/16.
 */
var metadataController = angular.module("metadataController",[])
    .controller('metadataController', ['$scope', '$http', 'API_URL', function ($scope, $http, API_URL) {
        $http.get(API_URL+"metadata")
        .success(function (data){
        	$scope.metadatas = data;
        });

        $scope.save = function(metadata){
          $http.post(API_URL+ "metadata", {
          	name:$scope.metadata
          })
          .success(function(data){
          	$scope.metadatas.push(data)
          });
        };

        $scope.delete = function(id){
        	$http.post(API_URL+"metadata/delete/"+id)
        	.success(function (data){
        		console.log(data);
        		location.reload();
        	})
        	.error(function (data){
        		console.log(data);
        		alert('Unable to delete');
        	});
        };

        
        $scope.edit = function(id){
        	$http.get(API_URL + "metadata/" + id)
        	.success(function (data){
                $scope.metadata = data.name;
        	})
        	.error(function (data){
              console.log("Could not get the selected metadata");
        	});

        	//$scope.updateButton = !$scope.updateButton;
        	//$scope.id = id;
        	
        	//$scope.saveButton= !$scope.saveButton;
        };

        $scope.update = function(id){
           $http.post(API_URL + "metadata/" + id, {
            name:$scope.metadata
           })
           .success(function (data){
           	console.log("UPDATED"+data);
           	$scope.metadatas.push(data);;
           	location.reload();
          });
        };

}]);
