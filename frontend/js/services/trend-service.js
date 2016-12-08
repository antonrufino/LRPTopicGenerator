(() => {
    angular
        .module('app')
        .factory('TrendService', ['$http', '$q', TrendService]);

    function TrendService($http, $q) {
        function getTwitterTrends() {
            let deferred = $q.defer();

            $http.get('/api/data/twitter')
            .then((res) => {
                deferred.resolve(res.data);
            }, (err) => {
                deferred.reject(err);
            });

            return deferred.promise;
        }

        return {
            getTwitterTrends: getTwitterTrends
        };
    }
})();
