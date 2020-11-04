//angular.module('starter.controllers', [])
angular.module('starter.controllers', ['starter.services'])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        //
        $scope.platform = ionic.Platform.platform();
    })
    .controller('FormCtrl',  function($scope, $ionicPopup) {
        $scope.url = {}

        $scope.loadData = function (){
            $scope.url = angular.copy(window.localStorage.getItem("url"));
        }
        $scope.saveData= function (value){
            window.localStorage.setItem("url", value);
            $scope.showAlert();
        }
        $scope.showAlert = function() {

            var alertPopup = $ionicPopup.alert({
                title: 'Erfolgreich',
                template: 'Rest-URL wurde gespeichert und wird jetzt verwendet!'
            });

            alertPopup.then(function(res) {
                console.log('URL "'+$scope.url+'" wurde gespeichert und wird jetzt verwendet!');
                window.location.reload();
            });
        };

        $scope.loadData();
    })
    .controller('SwitchCtrl', function($scope, Switch, $http) {
        $scope.settingsList = Switch.query();
        var rest_url = window.localStorage.getItem("url");

        // TODO
        // POST to REST-API
        $scope.updateSwitch = function(item) {
            // var serverarr=rest_url.split("/");
            // var server_rest_url = serverarr[0]+"//"+serverarr[2]+"/switch/"+item.id;
            if (rest_url.substr(rest_url.length-1)=="/")
                rest_url=rest_url.substr(0,rest_url.length-1);
            else if (rest_url.substr(rest_url.length-2)=="/")
                rest_url=rest_url.substr(0,rest_url.length-2);

            var server_rest_url = rest_url+"/"+item.id;

            $http.get(server_rest_url)
                .success(function (data) {
                    console.log(server_rest_url, item.text, data);
                });
        }
    });


