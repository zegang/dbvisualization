
	describe('AppCtrl', function(){
		var scope;
		
		beforeEach(module('StarterApp'));
		
		beforeEach(inject(function($controller){
			scope = {};
			mdSidenav = {};
			ctrl = $controller('AppCtrl', {$scope:scope});
		}));
		
		it('should contain 3 tables', function(){
			expect(scope.tables.length).toBe(3);
		});
	
		it('should contain 2 lines', function(){
			expect(scope.lines.length).toBe(2);
		});
	});
