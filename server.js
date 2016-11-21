var
express = require('express'),
app     = express();            // Create our app

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
