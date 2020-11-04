angular.module('starter.services', ['ngResource'])
    .factory('Switch', function ($resource, $http, $ionicPopup) {
        /*
         * $resource('http://smarty:5055/tmp/')
         */
        var rest_url = '';
        loadData = function () {
            rest_url = window.localStorage.getItem("url");
            console.log("From localStorage ---> rest_url=" + rest_url)

            //TODO
            //its not for world
            if (rest_url === null || rest_url === undefined) {
                rest_url = 'http://mgeo.goip.de/jsonapi/examples/smarthome/rest';
                console.log("Setting URL while url are NULL ---> rest_url=" + rest_url);
            }

        }
        loadData();

        showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Server not available',
                template: 'Your\'re not in WLAN or your definition in <b>Settings</b> are invalid.'
            });

            alertPopup.then(function (res) {
            });
        };

        $http.get(rest_url)
            .success(function (data) {
                //console.log("toll");
            })
            .error(function (err) {
                //alert("Smarthomeserver is not available! - Please check settings.");
                showAlert();
                console.log(err);
            });


        console.log("* Using URL: " + rest_url);
        return $resource(rest_url);

        // var rc = [
        //     { text: "nicht belegt", checked: false },
        //     { text: "Türverteiler", checked: true },
        //     { text: "Stehlampe", checked: false },
        //     { text: "TV", checked: false },
        //     { text: "AppleTV", checked: true },
        //     { text: "HD-Receiver", checked: false },
        //     { text: "Bassbox", checked: false }
        // ];
    })
;