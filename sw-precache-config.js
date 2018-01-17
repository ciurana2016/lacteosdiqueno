module.exports = {
    staticFileGlobs: [
      'dist/**.js',
      'dist/**.css'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
  };