(() => {
    angular
        .module('app', ['ngMaterial'])
        .config(['$mdThemingProvider', AppConfig]);

    function AppConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red', {
                'default': '700'
            });
    }
})();
