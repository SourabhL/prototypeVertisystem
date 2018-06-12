	// create the module and name it mainApp
angular.module('mainApp', ['ngRoute', 'ngAnimate','appRoutes','mainCtrl','authService','userCtrl','userService','storyCtrl','storyService'])

.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
})

.directive('backButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', goBack);

        function goBack() {
          history.back();
          scope.$apply();
        }
      }
    }
})

.factory('customersFactory',function()
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
				for(i=0;i<len;i++){
					if(people[i].id==parseInt(customerId))
						{
							return people[i];
							
						}
					
				}
				return {};
			};
			
			return factory;
		
	})

	.factory('Excel',function($window)
	{
		var uri='data:application/vnd.ms-excel;base64,',
		  template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
		  base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
		  format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
		return {
		  tableToExcel:function(tableId,worksheetName){
		      var table=$(tableId),
		          ctx={worksheet:worksheetName,table:table.html()},
		          href=uri+base64(format(template,ctx));
		      return href;
		  }
		};
	})
	
	.controller('aboutController', function($scope,$routeParams,customersFactory,Excel,$timeout) {
		var customerId = $routeParams.customerId;
		$scope.orders=null;
		var i=0;
		$scope.people=null;

		$scope.exportToExcel=function(tableId)
		{ // ex: '#my-table'
	      var exportHref=Excel.tableToExcel(tableId,'WireWorkbenchDataExport');
	      $timeout(function(){location.href=exportHref;},100); // trigger download
	  	}
		
		
		function init()
		{
			$scope.people = customersFactory.getCustomer(customerId);
		}
		$scope.message = 'Look! I am an about page.';
		init();
		
		
	})

	.controller('contactController', function($scope,customersFactory) {
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

	})

	.controller('frontController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Excelling in Recruitment, Development and 24x7 Services';
	})

	.controller('EmailController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Excelling in Recruitment, Development and 24x7 Services';
	});

