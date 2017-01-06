angular.module('gShark', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('gShark').config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();

}]);

angular.module('gShark')
	.factory('WorkSvc', function(){

		var works = [
			{
				link: 'myModalContent.html',
				img: 'img/work/ranlife/ranlifeThumbnail.jpg',
				header: 'RANLife Redesign',
				body: 'Complete redesign of the main RANLife website. This inculded creating new brand colors and udated visuals.'
			},{
				link: '*',
				img: 'img/work/beaconHomes/BH-HomeThumbnail.jpg',
				header: 'Beacon Homes Redesign',
				body: 'Redesign of Beacon Homes builder main website. built in Angular JS functinality and established new branding colors.'
			},{
				link: '*',
				img: 'img/work/ranFileTransfer/fileTransfer-Thumbnail.jpg',
				header: 'RANLife File Transfer',
				body: 'Redesign of Beacon Homes builder main website. built in Angular JS functinality and established new branding colors.'
			},{
				link: '*',
				img: 'img/work/ranSolar/RLS-Thumbnail.jpg',
				header: 'RANLife Solar',
				body: 'Complete branding and design for this new branch of the company. They wanted something bright and with a focus on earth and saving money.'
			},{
				link: '*',
				img: 'img/work/utahShortSales/ShortSales-Thumbnail.jpg',
				header: 'Utah Short Sales',
				body: 'Redesign of Beacon Homes builder main website. built in Angular JS functinality and established new branding colors.'
			},{
				link: '*',
				img: 'img/work/Logos/Logo-Thumbnail.jpg',
				header: 'Logo Collection',
				body: "A series of logos that I've designed. Some of them have gone on to good companies, others have been just for fun."
			}

		]

		return {
			works: works
		}
});

angular.module('gShark').controller('ModalDemoCtrl', function ($uibModal, $log, $document, $scope, $controller, WorkSvc) {
	var $ctrl = this;
	var link = 'myModalContent.html';
	var link2 = 'myModalContent.html';

	$ctrl.animationsEnabled = true;
	$ctrl.works = WorkSvc.works;

	$ctrl.open = function (size, work) {
		var modalInstance = $uibModal.open({
			animation: $ctrl.animationsEnabled,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: work.link,
			controller: 'ModalInstanceCtrl',
			controllerAs: '$ctrl',
			size: size,
			appendTo: parentElem,
			resolve: {
				items: function () {
					return $ctrl.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$ctrl.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$ctrl.openComponentModal = function () {
		var modalInstance = $uibModal.open({
			animation: $ctrl.animationsEnabled,
			component: 'modalComponent',
			resolve: {
				items: function () {
					return $ctrl.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$ctrl.selected = selectedItem;
		}, function () {
			$log.info('modal-component dismissed at: ' + new Date());
		});
	};

	$ctrl.openMultipleModals = function () {
		$uibModal.open({
			animation: $ctrl.animationsEnabled,
			ariaLabelledBy: 'modal-title-bottom',
			ariaDescribedBy: 'modal-body-bottom',
			templateUrl: 'stackedModal.html',
			size: 'sm',
			controller: function($scope) {
				$scope.name = 'bottom';
			}
		});

		$uibModal.open({
			animation: $ctrl.animationsEnabled,
			ariaLabelledBy: 'modal-title-top',
			ariaDescribedBy: 'modal-body-top',
			templateUrl: 'stackedModal.html',
			size: 'sm',
			controller: function($scope) {
				$scope.name = 'top';
			}
		});
	};

	$ctrl.toggleAnimation = function () {
		$ctrl.animationsEnabled = !$ctrl.animationsEnabled;
	};
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('gShark').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
	var $ctrl = this;

	$ctrl.ok = function () {
		$uibModalInstance.close($ctrl.selected.item);
	};

	$ctrl.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('gShark').component('modalComponent', {
	templateUrl: 'myModalContent.html',
	bindings: {
		resolve: '<',
		close: '&',
		dismiss: '&'
	},
	controller: function () {
		var $ctrl = this;

		$ctrl.$onInit = function () {
			$ctrl.items = $ctrl.resolve.items;
			$ctrl.selected = {
				item: $ctrl.items[0]
			};
		};

		$ctrl.ok = function () {
			$ctrl.close({$value: $ctrl.selected.item});
		};

		$ctrl.cancel = function () {
			$ctrl.dismiss({$value: 'cancel'});
		};
	}
});
