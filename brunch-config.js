module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/,
      },
    },
    stylesheets: {
      joinTo: 'app.css',
    },
    templates: {
      joinTo: 'app.js',
    },
  },

  paths: {
    public: 'dist',
  },

  npm: {
    styles: {
      spectacle: ['lib/themes/default/index.css'],
    },
  },

  modules: {
    autoRequire: {
      'app.js': ['index.js'],
    },
  },
};
