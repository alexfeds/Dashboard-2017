'use strict';

/**
 * @ngdoc service
 * @name dashboard2017App.modalPopService
 * @description
 * # modalPopService
 * Service in the dashboard2017App.
 */
angular.module('dashboard2017App')
  .service('modalPopService', function ($uibModal) {







  	this.callModal = function (){

var data = {
            boldTextTitle: "Done",
            textAlert: "Some content"
        };



   
 var ModalInstanceCtrl = function( $uibModalInstance, data) {
                this.data = data;
                this.close = function( /*result*/ ) {
                    $uibModalInstance.close(this.data);
                };
            };



  data.mode = 'success';

                    data = {
                        boldTextTitle: 'Data saved successfully',
                        mode: 'success'
                    };


                    var modalInstance = $uibModal.open({
                        templateUrl: 'views/ModalContentHTML.html',
                        controller: ModalInstanceCtrl,
                        backdrop: true,
                        keyboard: true,
                        backdropClick: true,
                        size: 'lg',
                        resolve: {
                            data: function() {
                                return this.data;
                            }
                        }
                    });


 $state.go('serviceReport');



return data.mode;
console.log(data.mode);
}

  });
