//The flash message service is used to display success and error messages in the angular application.
//It uses the $rootScope to expose the flash message to the main index.html file (/app/index.html) where the html is located
//for displaying the flash message.
//The flash message is cleared on location change so it only displays once, optionally it can be kept after
//a single location change, this is if you want to display a flash message after redirecting the user.

(function () {
    'use strict';

    angular
        .factory('FlashService', Service);

    function Service($rootScope) {
        var service = {};

        service.Success = Success;
        service.Error = Error;

        initService();

        return service;

        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearFlashMessage();
            });

            function clearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }

        function Success(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'success',
                keepAfterLocationChange: keepAfterLocationChange
            };
        }

        function Error(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'danger',
                keepAfterLocationChange: keepAfterLocationChange
            };
        }
    }

})();