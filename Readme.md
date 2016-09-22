This is a simple test of passing a Marko instance from a host application
into a "plugin" module. The plugin module may not reside in the host application's
`node_modules` directory; it can reside anywhere else on disk. The idea being that
the host application supplies its plugins with the Marko instance so that the dependency
doesn't have to be installed as many times as there are plugins that use it.

However, this is not working. If you `cd main-app && npm install && node app.js` you will
get the following error:

```
% node app.js                                                                                                         [s:0 l:10036]
module.js:457
    throw err;
        ^

        Error: Cannot find module 'marko/compiler'
            at Function.Module._resolveFilename (module.js:455:15)
      at module.exports (/private/tmp/22/marko-byref-test/main-app/node_modules/resolve-from/index.js:14:16)
      at Object.markoExtension [as .marko] (/private/tmp/22/marko-byref-test/main-app/node_modules/marko/node-require.js:103:39)
      at Module.load (module.js:473:32)
      at tryModuleLoad (module.js:432:12)
      at Function.Module._load (module.js:424:3)
      at Module.require (module.js:483:17)
      at require (internal/module.js:20:19)
      at module.exports (/private/tmp/22/marko-byref-test/optional-module/views.js:7:21)
      at Object.module.exports.plugin (/private/tmp/22/marko-byref-test/optional-module/index.js:7:52)
```
