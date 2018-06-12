angular.module('userCtrl',['userService'])

.controller('UserController',  function(User){
	
	var vm = this;

	vm.processing = true;

	User.all()
		.success(function(data){
			vm.users = data;
		});

})

.controller('UserCreateController',  function(User,$location,$window){

	var vm = this;

	vm.signUpuser = function(){
		vm.message = '';

		User.create(vm.userData)
			.then(function(response){
				vm.userData = {};
				vm.message = response.data.message;

				console.log('Inside Signup...'+vm.message );
				console.log(response );
				console.log('Token...'+response.data.token );

				$window.localStorage.setItem('token',response.data.token);
				$location.path('/home');
			})
	};


});