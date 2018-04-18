var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	
	console.log("In my controller............");
	
	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";
	
	$scope.users = [
		{ "firstName":"John", "lastName":"sdfdf", "emailId":"john@example.com", "phoneNo":"8523698521", "userStatus" : "Active" },
		{ "firstName":"Mary",  "lastName":"sdfdf", "emailId":"mary@example.com", "phoneNo":"8823698525", "userStatus" : "Inactive" },
		{ "firstName":"July",  "lastName":"sdfdf", "emailId":"july@example.com", "phoneNo":"4523698526", "userStatus" : "Active" }
	];	
	
	// Saving details	
	$scope.saveUser = function($event){
		console.log($scope.newUser);
		if($scope.newUser.firstName == undefined || $scope.newUser.lastName == undefined || $scope.newUser.emailId == undefined || $scope.newUser.phoneNo == undefined || $scope.newUser.userStatus == undefined){
			$('#contact_form').data('bootstrapValidator').resetForm();
			$event.stopPropagation();
		} else {
			$scope.users.push($scope.newUser);		
		    $scope.newUser = {};
			$scope.message = "New User added successfully!";
			$('#contact_form').data('bootstrapValidator').resetForm();
		}
		
	};
	
	//Get details to click on selected user
	$scope.selectUser = function(user){
		//console.log(user);
		$scope.clickedUser = user;
	};
	
	//Gets update to user details
	$scope.updateUser = function($event, clickedUser){
		
		if($scope.clickedUser.firstName == undefined || $scope.clickedUser.lastName == undefined || $scope.clickedUser.emailId == undefined || $scope.clickedUser.phoneNo == undefined || $scope.clickedUser.userStatus == undefined){
			$('#contact_form').data('bootstrapValidator').resetForm();
			$event.stopPropagation();
		} else {
			$scope.message = "User updated successfully!";
			$('#contact_form1').data('bootstrapValidator').resetForm();
		}
			
	};
	
	//Deleting user details
	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.message = "User deleted successfully!";
	};
	
	$scope.clearMessage = function(){
		$scope.message = "";
	};
		
	$scope.cleareFields = function() {		
		$('form').each(function () {
			$(this).data('bootstrapValidator').resetForm();
		})
		$('#myModal').on('hidden.bs.modal', function () {
			$(this).find('form').trigger('reset');
		})
	};
	
});