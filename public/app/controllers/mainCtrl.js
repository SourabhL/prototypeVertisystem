angular.module('mainCtrl',[])

.controller('MainController', function($rootScope, $location, Auth,$scope)
{
	var vm = this;

	vm.loggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart', function()
	{

		vm.loggedIn = Auth.isLoggedIn();

		if(vm.loggedIn)
		{
			Auth.getUser()
				.then(function(data)
				{
					vm.loginData = data.data;
				});
		}
	});

	vm.doLogin = function(){

		vm.processing = true;

		vm.error = '';

		Auth.login(vm.loginData.username, vm.loginData.password)
			.success(function(data){

				vm.processing = false;

				Auth.getUser()
					.then(function(data){
					vm.user = data.data;
				});

				if(data.success)
					$location.path('/home');
				else
					vm.error = data.message;
			})

	};

	vm.doLogout = function()
	{
		Auth.logout();
		$location.path('#home');
	}

  $scope.view_tab = 0;
	 $scope.tabs = [{
            name: 'Home',
            tab_ref: '#/',
        },{
            name: 'Floorplan Dashboard',
            tab_ref: '#/dash',
        }, {
            name: 'Edit Location',
            tab_ref: '#/comingSoon'
        }
        , {
            name: 'Issue for this location',
            tab_ref: '#/comingSoon'
        }, {
            name: 'Image Gallery',
            tab_ref: '#/comingSoon'
        },
       	{
            name: 'Questionnaries',
            tab_ref: '#/comingSoon'
        },
        {
            name: 'All Content',
            tab_ref: '#/comingSoon'
        },
		{
            name: 'Orders',
            tab_ref: '#/comingSoon'
        }
        ];
    
    $scope.changeTab = function (index) {
        $scope.view_tab = index;
        $scope.selectedTab = $scope.tabs[index];
    }
    $scope.addTab = function () {
        $scope.tabs.push({name: ''});
    }
    //Select first
    $scope.changeTab(0);

});

