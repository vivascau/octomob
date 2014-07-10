angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
.factory('Octopus', function() {
    // Might use a resource here that returns a JSON array

    return {
        builds: function() {
            return [1,2,3];
        },
        get: function(friendId) {
            // Simple index lookup
            return friends[friendId];
        }
    }
});

//.factory('socket', function ($rootScope) {
//    var socket = io.connect();
//    return {
//        on: function (eventName, callback) {
//            socket.on(eventName, function () {
//                var args = arguments;
//                $rootScope.$apply(function () {
//                    callback.apply(socket, args);
//                });
//            });
//        },
//        emit: function (eventName, data, callback) {
//            socket.emit(eventName, data, function () {
//                var args = arguments;
//                $rootScope.$apply(function () {
//                    if (callback) {
//                        callback.apply(socket, args);
//                    }
//                });
//            })
//        }
//    };
//});
