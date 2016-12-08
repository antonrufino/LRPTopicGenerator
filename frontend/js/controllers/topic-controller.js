(() => {
    angular
        .module('app')
        .controller('TopicController', ['TrendService', TopicController]);

    function TopicController(TrendService) {
        let keywords = [];
        let vm = this;
        vm.generatedTopic = 'a';
        vm.notLoadedYet = true;

        TrendService.getTwitterTrends()
        .then((data) => {
            keywords = data;
            vm.notLoadedYet = false;
            vm.generate();
        });

        function getRandom(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        vm.generate = () => {
            console.log('kek');
            console.log(vm);
            var template = getRandom(templates);
            vm.generatedTopic = ""

            for (var i = 0; i < (template.length - 1); ++i) {
                let keyword = getRandom(keywords);

                console.log(keyword);
                if (typeof keyword === 'object') {
                    keyword = `<a href="${keyword.url}">${keyword.name}</a>`;
                }

                vm.generatedTopic += (template[i] + keyword);
            }

            angular.element('#topic').html(vm.generatedTopic += template[template.length - 1]);
        }

    }
})();
