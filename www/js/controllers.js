angular.module('app.controllers', [])

.controller('chatsCtrl', function($scope) {
  $scope.conversations = [{
    name: 'Juan',
    avatar_url: 'http://pickaface.net/includes/themes/clean/img/slide4.png',
    connected: true,
    writing: true,
    last_message: new Date('2016-05-14 12:23:25')
  }, {
    name: 'Jorge',
    avatar_url: 'http://www.interdating-ukrainian-women.com/wp-content/uploads/2013/06/avatar.jpg',
    connected: true,
    writing: false,
    last_message: new Date('2016-05-12 12:23:25')
  }, {
    name: 'Lucía',
    avatar_url: 'https://www.tm-town.com/assets/default_female600x600-3702af30bd630e7b0fa62af75cd2e67c.png',
    connected: false,
    writing: false,
    last_message: new Date('2016-05-08 12:23:25')
  }];
})

.controller('contactosCtrl', function($scope) {
  $scope.contacts = [{
    name: 'Juan',
    avatar_url: 'http://pickaface.net/includes/themes/clean/img/slide4.png',
    connected: true,
    last_connection: new Date('2016-05-14 12:23:25')
  }, {
    name: 'Jorge',
    avatar_url: 'http://www.interdating-ukrainian-women.com/wp-content/uploads/2013/06/avatar.jpg',
    connected: true,
    last_connection: new Date('2016-05-14 12:23:25')
  }, {
    name: 'Lucía',
    avatar_url: 'https://www.tm-town.com/assets/default_female600x600-3702af30bd630e7b0fa62af75cd2e67c.png',
    connected: false,
    last_connection: new Date('2016-05-10 12:23:25')
  }];
})

.controller('chatCtrl', function($scope) {

})

.controller('contactoCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
