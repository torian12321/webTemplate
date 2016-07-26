WebTemplate
=============

Basic web template to start a new page

The templates uses [Progressive Web App](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) principles

SetingUp
---------------

Use a php server to run the project

Change the path of the project on manifest.json

```"start_path" : './'```


Development phase
---------------

To compile less and js files, use [Koala](http://koala-app.com/), drag the folder 'src' on it


Implementation phase (publish)
---------------

Whe publish the project:
- From src/css just publis style.min.css
- From src/func just publis func.min.js
- Do not publish src/less

**Styleguide:**

If including styleguide folder, also add the less files 'src/less/*.less'


**Cache:**

If we want to create static HTML files, when finish, cache the pages to dont use the PHP files.

On 'src/php/config.php', set to true the cache property. Then, visith each page on the browser to 'render' the views
```$GLOBALS['cache']  = true;```


Technologies
---------------

- [RequireJS](https://http://requirejs.org/)
- [jQuery](https://jquery.com/)
- [Waypoint](http://imakewebthings.com/waypoints/)
- [LESS](http://lesscss.org/)
- [KaleyStyleguide](https://github.com/thomasdavis/kaleistyleguide)


Autor
---------------
[Aitor](http://aitorpalomares.esy.es/)