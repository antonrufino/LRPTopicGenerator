var topicContainer = document.getElementById('topic');
var btn = document.getElementById('btn');

function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function generate() {
    var template = getRandom(templates);
    var topic = ""

    for (var i = 0; i < (template.length - 1); ++i) {
        topic += (template[i] + getRandom(topics));    
    }
    
    topic += template[template.length - 1];
    topicContainer.innerHTML = topic;
}
 
document.addEventListener('load', generate, false);
btn.addEventListener('click', generate, false);   
