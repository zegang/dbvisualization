var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  
  $scope.tables = [
	{"name":"T1", wanted:false, "top":"10px", "left":"60px"},
	{"name":"T2", wanted:false, "top":"50px", "left":"10px"},
	{"name":"T3", wanted:false, "top":"90px", "left":"200px"}
  ];

  $scope.lines = [
	[0,1],
	[0,2]
  ];
  
  // $watch("assignments", function (value) {
	 // var i = 0;
	 // var maxIndex = $scope.tables.length;
	 // for(; i < maxIndex; i++){
		// $('#'+ $scope.tables[i].name ).draggable();
	 // }
  // }
  
 $scope.chooseTable = function(){
	 // var erPanel = $("#er1");
	 // var context = erPanel.getContext("2d");
	 // context.fillStyle = "#EEEEFF";
	 // context.filllRect = [0,0,10,10];
	 var i = 0;
	 var maxIndex = $scope.tables.length;
	 for(; i < maxIndex; i++){
		 if($scope.tables[i].wanted){
		 var tv = '<div id="' + $scope.tables[i].name + '" class="table_in_panel" ' + ' style="left:' + $scope.tables[i].left +';top:'+ $scope.tables[i].top +'">' +  $scope.tables[i].name + '</div>';
			 if($('#'+ $scope.tables[i].name ).length <= 0){			 
				$(".er_panel").append(tv);
				$('#'+ $scope.tables[i].name ).draggable();
			 }
		 }else{
			    $("div").remove('#'+ $scope.tables[i].name);
		 }
	 }
	 // drawLine('#'+ $scope.tables[0].name,'#'+ $scope.tables[1].name);
	 // drawLine2($scope.tables[0],$scope.tables[1]);
 }
	
	function drawLine(tableA,tableB){
		alert($(tableB).position());
		var lineW = $(tableB).position().left - $(tableA).position().left;
		var lineH = $(tableB).position().top - $(tableA).position().top;
		lineW = Math.abs(lineW);
		lineH = Math.abs(lineH);
		var line = '<svg width="'+ lineW +'" height="' + lineH + '">';
		line = line +  '<line x1="'+ $(tableA).position().left +'" y1="'+ $(tableA).position().top +'"';
		line = line + 'x2="'+ $(tableB).position().left +'" y2="'+ $(tableB).position().top +'" style="stroke:rgb(255,0,0);stroke-width:2" />';
		line = line + '</svg>';
		$(".er_panel").append(line);
	}
	
	function drawLine2(tableA,tableB){
		var lineW = Math.abs(tableA.left - tableB.left);
		var lineH = Math.abs(tableA.top - tableB.top);
		var line = '<svg width="'+ lineW +'" height="' + lineH + '">';
		line = line +  '<line x1="'+ tableA.left +'" y1="'+ tableA.top +'"';
		line = line + 'x2="'+ tableB.left +'" y2="'+ tableB.top +'" style="stroke:rgb(255,0,0);stroke-width:2" />';
		line = line + '</svg>';
		alert(line);
		$(".er_panel").append(line);
	}
	
	$scope.testX = "0px";
	
	$scope.moveT3 = function(){
		$scope.tables[2].left = "300px";
		$scope.tables[2].top = "200px";
	}
	
	$scope.moveTable = function(event){
		var i = 0;
		var maxIndex = $scope.tables.length;
		for(; i < maxIndex; i++){
			if($scope.tables[i].name === event.toElement.id){
				$scope.tables[i].left = event.toElement.style.left;
				$scope.tables[i].top = event.toElement.style.top;
			}
		}
	}
}]);

