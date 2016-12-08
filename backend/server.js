const express = require('express');
const path = require('path');

let app = express();

app.set('port', (process.env.PORT || 8000))

app.use('/', express.static(path.join(__dirname, '/../frontend')));
app.use(require(__dirname + '/config/router')(express.Router()));

app.listen(app.get('port'), () => {
    console.log('App listening on port ' + app.get('port'));
});
