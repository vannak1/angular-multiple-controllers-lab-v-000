function StaffController() {
	var vm = this;

	vm.name = 'Jacob';
	vm.email = 'jacob@jingle.com';
	vm.phone = '555-9876';
}

angular
	.module('app')
	.controller('StaffController', StaffController);
