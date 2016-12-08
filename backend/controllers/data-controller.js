const twitter = require(__dirname + '/../config/twitter');

exports.getTrends = (req, res) => {
    twitter.get('trends/place.json', {
        id: 23424934
    }, (err, data, response) => {
        res.status(200).send(data);
    });
};
