Package.describe({
  name: 'albererre:ironether',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Show Accounts without ether unit',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.mainModule('ironether.js');
  api.addAssets('selectAccount_iron.html', 'client');
  api.addFiles('selectAccount_iron.js', 'client');
});


Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('albererre:ironether');
  api.mainModule('ironether-tests.js');
});
