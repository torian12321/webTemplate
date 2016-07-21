//Load common code that includes config, then load the app logic for this page.
requirejs(['./require-config'], function (common) {
    requirejs(['app/form']);
    //requirejs(['app/controller_form']);
});
