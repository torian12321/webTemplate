var
express = require('express'),
php     = require('express-php'),
app     = express();
 
app.use(php.cgi('./httpdocs', '/usr/local/bin/php-cgi'));
app.use(express.static('./httpdocs'));
 
app.listen(4000, function () {
  console.log('Express-php server is up on port 4000');
});
