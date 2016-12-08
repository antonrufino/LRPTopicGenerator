const twitter = require(__dirname + '/../config/twitter');
const moment = require('moment');

let lastRequest = moment();
let recentTrends = null;

exports.getTrends = (req, res) => {
    if (recentTrends === null || moment().diff(lastRequest, 'minutes') > 60) {
        twitter.get('trends/place.json', {
            id: 23424934
        }, (err, data, response) => {
            recentTrends = data;
            res.status(200).send(data);
        });
    } else {
        console.log('Sending old trend data.');
        res.status(200).send(recentTrends);
    }
};
