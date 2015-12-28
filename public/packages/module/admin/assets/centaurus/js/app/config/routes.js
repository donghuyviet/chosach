bonggie.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
	$routeProvider.when('/', {templateUrl: 'js/app/partials/views/dashboard.html'});
	$routeProvider.when('/users', {templateUrl: 'js/app/partials/views/users.html'});
	$routeProvider.when('/profile', {templateUrl: 'js/app/partials/views/profile.html'});
	$routeProvider.when('/widgets', {templateUrl: 'js/app/partials/views/widgets.html'});
	$routeProvider.when('/calendar', {templateUrl: 'js/app/partials/views/calendar.html'});
	$routeProvider.when('/pricing', {templateUrl: 'js/app/partials/views/pricing.html'});
	$routeProvider.when('/wizard-popup', {templateUrl: 'js/app/partials/views/wizard_popup.html'});
	$routeProvider.otherwise({ redirectTo: '/' });
}]);