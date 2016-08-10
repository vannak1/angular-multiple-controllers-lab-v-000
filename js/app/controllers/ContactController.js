function ContactController() {
	var vm = this;

	vm.name = 'John ';
	vm.email = 'johnny@apple.com';
	vm.phone = '867-5309';

	vm.changeName = function () {
		vm.name = 'Bob';
	};
}

angular
	.module('app')
	.controller('ContactController', ContactController);
