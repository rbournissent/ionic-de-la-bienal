angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.chats', {
    url: '/chats',
    views: {
      'tab2': {
        templateUrl: 'templates/chats.html',
        controller: 'chatsCtrl'
      }
    }
  })

  .state('tabsController.contactos', {
    url: '/contactos',
    views: {
      'tab1': {
        templateUrl: 'templates/contactos.html',
        controller: 'contactosCtrl'
      }
    }
  })

  .state('tabsController.juanDetalles', {
    url: '/contacto/juan',
    views: {
      'tab1': {
        templateUrl: 'templates/juanDetalles.html',
        controller: 'juanDetallesCtrl'
      }
    }
  })

  .state('tabsController.juanConversaciN', {
    url: '/chat/juan',
    views: {
      'tab2': {
        templateUrl: 'templates/juanConversaciN.html',
        controller: 'juanConversaciNCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/chats')

  

});