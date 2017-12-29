Package.describe({
  name: 'albererre:ironether',
  version: '0.0.9',
  // Brief, one-line summary of the package.
  summary: 'Show Accounts without ether unit',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AlberErre/meteor-ironether.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript@0.4.3');
  api.use('underscore@1.0.8', 'client');
  api.use('jquery@1.11.8', 'client');
  api.use('templating@1.1.9', 'client');
  api.use('reactive-var@1.0.9', 'client');
  api.use('less@2.6.0', 'client');
  api.use('standard-minifiers@1.0.6', 'client');

  api.use('alexvandesande:identicon@2.0.2', 'client');
  api.use('3stack:bignumber@2.0.0', 'client');
  // api.use('underscorestring:underscore.string@3.1.1', 'client');

  api.use('ethereum:web3@0.15.2', 'client');
  api.use('ethereum:tools@0.4.0', 'client');
  api.use('frozeman:animation-helper@0.2.5', 'client');
  api.use('frozeman:storage@0.1.8', 'client');
  api.use('frozeman:template-var@1.2.2', 'client');
  
  // provide packages for the app developer as well
  api.imply(['frozeman:template-var@1.2.2','ethereum:tools'], 'client');
  
  api.addFiles('selectAccount_iron.html', 'client');
  api.addFiles('selectAccount_iron.js', 'client');
});
