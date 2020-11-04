/**
 * app: mgeoapp
 * requirements: 'ionic', 'starter.controllers'
 */
angular.module('mgeoapp', ['ionic', 'starter.controllers'])
    .run(function ($ionicPlatform) {
        
        //If IONIC is loaded
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
           // $cordovaSplashscreen.show();
            
        });
    })

    // .run(function($cordovaSplashscreen) {
    //     $cordovaSplashscreen.show();
    // })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.switch', {
                url: '/switch',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/switch.html',
                        controller: 'SwitchCtrl'
                    }
                }
            })

            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings.html'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/app/switch');

    })
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://*.mgeo.de/**', 'http://docker.mgeo.de/**', 'http://cloud.mgeo.de/**',
        'http://mgeo.goip.de/**', 'http://proxy/**', 'http://pdoc2:5988/**','http://pdoc2/**'
    ]);
});
