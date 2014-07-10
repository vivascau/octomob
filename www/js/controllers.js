angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Octopus, $http) {

        // $http.defaults.headers.common.Accept = 'X-Octopus-ApiKey API-BRXMAGUSCGG0GRCZYRILSUGWMG';
        var apiKey = 'API-BRXMAGUSCGG0GRCZYRILSUGWMG';
        var host = "http://octomation.samwong.hk/api";

        $http({method: 'GET', url: host + '/Tasks?apikey='+apiKey}).
            success(function(data, status, headers, config) {
                $scope.events = data;
        }).
            error(function(data, status, headers, config) {
                console.log(data);
        });



        $scope.builds = Octopus.builds();

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $http) {
        // $http.defaults.headers.common.Accept = 'X-Octopus-ApiKey API-BRXMAGUSCGG0GRCZYRILSUGWMG';
        var apiKey = 'API-BRXMAGUSCGG0GRCZYRILSUGWMG';
        var host = "http://octomation.samwong.hk/api";

        $http({method: 'GET', url: host + '/Tasks?apikey='+apiKey}).
            success(function(data, status, headers, config) {
                $scope.lastTask = data.Items[0];
            }).
            error(function(data, status, headers, config) {
                console.log(data);
        });


});
