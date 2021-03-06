(() => {
    angular
        .module('app')
        .controller('TopicController', ['TrendService', TopicController]);

    function TopicController(TrendService) {
        let keywords = topics;
        let vm = this;

        vm.generatedTopic = 'a';
        vm.dataLoaded = false;
        
        function getRandom(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        vm.generate = () => {
            var template = getRandom(templates);
            vm.generatedTopic = ""

            for (var i = 0; i < (template.length - 1); ++i) {
                let keyword = getRandom(keywords);

                if (typeof keyword === 'object') {
                    keyword = `<a href="${keyword.url}">${keyword.name}</a>`;
                }

                vm.generatedTopic += (template[i] + keyword);
            }

            angular.element('#topic').html(vm.generatedTopic += template[template.length - 1]);
        }

        TrendService.getTwitterTrends()
        .then((data) => {
            keywords = keywords.concat(data);
            vm.dataLoaded = true;
            vm.generate();
        });
    }
})();
