const PORT = process.env.PORT || 3000;

var
express = require('express'),
chalk   = require('chalk'),
ip      = require('ip'),
app     = express();

app.use(express.static('public'));
app.listen(PORT, function () {
    console.log(
        'Server started' + chalk.green(' ✓ \n') +
        chalk.bold('Access URLs: \n') +
        chalk.gray('----------------------------------- \n') +
        'Localhost: ' + chalk.blue('http://localhost:' + PORT) + '\n' +
        '      LAN: ' + chalk.blue(ip.address() + ':'  + PORT) + '\n' +
        chalk.gray('----------------------------------- \n') +
        'Press ' + chalk.blue('CTRL-C') + ' to stop'
    );
});
