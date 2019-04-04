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
				'<label>Name</label>',
				'<div ng-transclude="name"></div>',
				'<label>Position</label>',
				'<div ng-transclude="position"></div>',
				'<label>Description</label>',
				'<div ng-transclude="description"></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
