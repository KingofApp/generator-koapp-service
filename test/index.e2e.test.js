'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-koapp-service:app', function () {
  var answers = {
    pluginName: 'new service',
    userName: 'Yo Mismo',
    spanishDescription: 'Mi nuevo Servicio',
    englishDescription: 'My new Service',
    license: 'MIT',
    homepage: 'http://kingofapp.com',
    categories: '   services,DOCumentation, demo',
    price: '0'
  };

  var answersExpected = {
    pluginName: 'new-service',
    varModuleName: 'newServicce',
    homepage: 'http://kingofapp.com',
    userName: 'Yo Mismo',
    spanishDescription: 'Mi nuevo Servicio',
    englishDescription: 'My new Service',
    license: 'MIT',
    categories: ['services', 'documentation', 'demo'],
    price: 0
  };

  var filesToCheck = [
    'service.js',
    'README.md',
    'config.json',
    'bower.json',
    'package.json',
    'locale/en_US.json',
    'locale/es_ES.json',
    'docs/jsdoc.json',
    'docs/jsdoc.md',
    'docs/en_US.md',
    'docs/es_ES.md',
    'images/banner.png',
    'images/list.png',
    'images/logo.png',
    'images/popover.png',
    'images/screenshot01.png'
  ];

  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments([answers.pluginName])
      .withOptions(answers)
      .on('end', done);
  });

  filesToCheck.forEach(function (key) {
    it('creates file ' + key, function () {
      assert.file([
        key
      ]);
    });
  });

  it('checks content bower.json', function () {
    assert.jsonFileContent('bower.json', {
      name: answersExpected.pluginName,
      description: answersExpected.englishDescription,
      authors: answersExpected.userName,
      license: answersExpected.license,
      homepage: answersExpected.homepage
    });
  });

  it('checks content config.json', function () {
    assert.jsonFileContent('config.json', {
      name: answersExpected.pluginName,
      identifier: answersExpected.pluginName,
      descriptionShort: {
        'es-ES': answersExpected.spanishDescription,
        'en-US': answersExpected.englishDescription
      },
      author: answersExpected.userName,
      category: answersExpected.categories,
      price: answersExpected.price,
      view: 'services/' + answersExpected.pluginName + '/index.html',
      files: [
        'services/' + answersExpected.pluginName + '/controller.js', 'services/' + answersExpected.pluginName + '/style.html'
      ],
      images: {
        list: 'services/' + answersExpected.pluginName + '/images/list.png',
        screenshots: [
          'services/' + answersExpected.pluginName + '/images/screenshot01.png'
        ],
        popover: 'services/' + answersExpected.pluginName + '/images/popover.png',
        banner: 'services/' + answersExpected.pluginName + '/images/banner.png',
        logo: 'services/' + answersExpected.pluginName + '/images/logo.png'
      }
    });
  });
});
