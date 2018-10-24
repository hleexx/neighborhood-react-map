module.exports = {
  root: 'build',
  staticFileGlobs: [
    'build/static/css/**.css',
    'build/**.html',
    'build/static/js/**.js'
  ],
  runtimeCaching: [{
    urlPattern: /^http:\/\/localhost:8080\//,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/maps.googleapis.com\//,
    handler: 'networkFirst'
  }],
};