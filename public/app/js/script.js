	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute','ngAnimate']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				
				templateUrl : 'pages/home',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about/:customerId', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			// route for the contact page
			.when('/documents', {
				templateUrl : 'pages/documents'
			})
			// route for the contact page
			.when('/optimize', {
				templateUrl : 'pages/optimize.html'
			});
	});
	
	scotchApp.factory('customersFactory',function()
	{
		
		var people = [ {
					id:1,
					name : 'Deepak Sharma',
					team : 'Financial Services',
					joined : '2016-05-01',
					tickets:[{
						id:44697,
						description:'Migrate Portfolio Processing',
						fp_status:'Dev-Review',
						opsDate:'2017-04-20',
						status:'Fixing Dev Review Comments',
						completion:'92%'
					}]
				}, {
					id:2,
					name : 'Sourabh Lalwani',
					team : 'Financial Services',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				}, {
					id:3,
					name : 'Ritu Lalwani',
					team : 'Financial Services',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				}, {
					id:4,
					name : 'Aamir Sohail',
					team : 'Financial Services',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				}, {
					id:5,
					name : 'Anjani Dubey',
					team : 'Financial Services',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				}, {
					id:6,
					name : 'Meenakshi Sukheja',
					team : 'Financial Services',
					joined : '2016-02-01',
					tickets:[{
						id:44697,
						description:'Migrate Portfolio Processing',
						fp_status:'Dev-Review',
						opsDate:'2017-04-20',
						status:'Fixing Dev Review Comments',
						completion:'92%'
					}]
				}
				, {
					id:7,
					name : 'Khader Basha',
					team : 'Financial Services',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				},
				 {
					id:8,
					name : 'Ziya Ur Rehman',
					team : 'Sales and Inventory',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				} ,
				 {
					id:9,
					name : 'Rita Tomer',
					team : 'Sales and Inventory',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				} ,
				 {
					id:10,
					name : 'Giri Reddy',
					team : 'Sales and Inventory',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				} ,
				{
					id:11,
					name : 'Himanshu Joshi',
					team : 'System Setup',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				},
				{
					id:11,
					name : 'Himanshu Joshi',
					team : 'System Setup',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				},
				{
					id:12,
					name : 'Sarita Tomer',
					team : 'System Setup',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				},
				{
					id:11,
					name : 'Devika Jain',
					team : 'System Setup',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				},
				{
					id:11,
					name : 'Mahendra Kalsengra',
					team : 'System Setup',
					joined : '2016-02-01',
					tickets:[{
						id:40393,
						description:'Migrate Close Contracts to Clarity',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:45616,
						description:'Migrate Contract and Owner Cancellation',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44698,
						description:'Migrate Escrow Closing',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49820,
						description:'Contract Cancellation Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:49341,
						description:'Contract Closing Enhancements',
						fp_status:'Closed',
						opsDate:'-',
						status:'Done',
						completion:'100%'
					},
					{
						id:44692,
						description:'Migrate Document Transmittal',
						fp_status:'Dev-Asg',
						opsDate:'2017-05-01',
						status:'Testing Transmittal tab and started working on the Override Tab. ',
						completion:'50%'
					}]
				}];


			var factory={};
			factory.getCustomers= function(){
				return people;
				
			};
			
			factory.getCustomer = function(customerId){
				var len=people.length;

				for(i=0;i<len;i++)
				{
					if(people[i].id==parseInt(customerId))
					{
						return people[i];
					
					}
					
				}
				return {};
			};
			
			return factory;
		
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('frontController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Excelling in Recruitment, Development and 24x7 Services';
	});

	scotchApp.controller('aboutController', function($scope,$routeParams,customersFactory) {
		var customerId = $routeParams.customerId;
		$scope.orders=null;
		var i=0;
		$scope.people=null;
		
		
		function init(){
			$scope.people = customersFactory.getCustomer(customerId);
					}
		$scope.message = 'Look! I am an about page.';
		init();
		
		
	});

	scotchApp.controller('contactController', function($scope,customersFactory) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		
		$scope.sortBy='team';
		$scope.reverse=false;
		$scope.people=[];
		
		function init(){
			$scope.people=customersFactory.getCustomers();
		}
		
		init();
		
		$scope.doSort=function(propName)
		{

			$scope.sortBy=propName;
			$scope.reverse=!($scope.reverse);
		};

	});