function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>Name: <h4 ng-transclude="name"></h4></div>',
				'<div>Position: <h6 ng-transclude="position"></h6></div>',
        		'<div>Description: <p ng-transclude="description"></p></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);