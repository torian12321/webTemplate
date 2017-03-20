const PORT = process.env.PORT || 4000;

var
express = require('express'),
php     = require('express-php'),
chalk   = require('chalk'),
ip      = require('ip'),
app     = express();
 
app.use(php.cgi('./httpdocs', '/usr/local/bin/php-cgi'));
app.use(express.static('./httpdocs'));
 
app.listen(PORT, function () {
    console.log(
        'PHP Server started' + chalk.green(' ✓ \n') +
        chalk.bold('Access URLs: \n') +
        chalk.gray('----------------------------------- \n') +
        'Localhost: ' + chalk.blue('http://localhost:' + PORT) + '\n' +
        '      LAN: ' + chalk.blue(ip.address() + ':'  + PORT) + '\n' +
        chalk.gray('----------------------------------- \n') +
        'Press ' + chalk.blue('CTRL-C') + ' to stop'
    );
});
