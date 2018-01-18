module.exports = {
    staticFileGlobs: [
      'dist/**.html', // -- TODO nose si data problemas ahora mismo
      'dist/**.js',
      'dist/**.css'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
  };