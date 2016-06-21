WebTemplate
=============

Basic web template to start a new page

Use a php server to run the project

To compile less and js files, use koala http://koala-app.com/


Setup
---------------

Change the path of the project on src/php/config.php

```$GLOBALS['projectPath'] = 'http://mywebsite.es';```


Publication
---------------

Whe publish the project:
- From src/css just publis style.min.css
- From src/func just publis func.min.js
- Do not publish src/less

**Styleguide:**

If including styleguide folder, also add src/less/style.less


Cache
---------------

In case of an static page, when finish, cache the pages to create html pages.

Uncoment the php functions cache_open() on pages/_header.php cache_close() on pages/_footer.php, then, visith each page on the browser.


Technologies
---------------

- [jquery](https://jquery.com/)
- [waypoint](http://imakewebthings.com/waypoints/)
- [LESS](http://lesscss.org/)
- [KaleyStyleguide](https://github.com/thomasdavis/kaleistyleguide)