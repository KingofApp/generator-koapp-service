'use strict';
var yeoman  = require('yeoman-generator');
var chalk   = require('chalk');
var yosay   = require('yosay');
var tools   = require('koapp');

module.exports = yeoman.Base.extend({

  init : function() {
    var self = this;

    this.argument('pluginName',       {type: String, desc: 'Service name',        alias: 'n', required: true});
    this.option('homepage',           {type: String, desc: 'Author\'s homepage',  alias: 'w'});
    this.option('userName',           {type: String, desc: 'Author\'s name',      alias: 'u'});
    this.option('spanishDescription', {type: String, desc: 'Spanish description', alias: 's'});
    this.option('englishDescription', {type: String, desc: 'English description', alias: 'e'});
    this.option('price',              {type: Number, desc: 'Price',               alias: 'p', default: 0});
    this.option('license',            {type: String, desc: 'License',             alias: 'l', default: 'MIT'});
    this.option('categories',         {type: tools.parseCategories, desc: 'Categories (comma to split)', alias: 'c'});

    ['homepage', 'userName', 'spanishDescription', 'englishDescription', 'license', 'price'].forEach(function(id) {
      self[id] = self.options[id];
    });
    var pluginName      = this.arguments[0].toLowerCase();
    this.varPluginName  = tools.camelize(pluginName);
    this.pluginName     = tools.fixPluginName(pluginName, '-');
    this.categories     = tools.fixPluginCategories(this.options.categories || 'others');
  },

  writing: function () {
    var _self = this;
    var serviceInput = {};

    this.destinationRoot(this.destinationPath() + '/' + this.pluginName);

    var keys = [
      'pluginName',
      'homepage',
      'varPluginName',
      'userName',
      'spanishDescription',
      'englishDescription',
      'license',
      'categories',
      'price'
    ];

    keys.forEach(function (key) {
      serviceInput[key] = _self[key];
    });

    var templatedFiles = [
      'service.js',
      'README.md',
      'config.json',
      'package.json',
      'locale/en_US.json',
      'locale/es_ES.json',
      'docs/jsdoc.md',
      'docs/en_US.md',
      'docs/es_ES.md'
    ];

    var originalFiles = [
      'docs/jsdoc.json',
      '.bowerrc'
    ];

    templatedFiles.forEach(function(id) {
      tools.copy(_self, 'copyTpl', id, id, serviceInput);
    });

    originalFiles.forEach(function(id) {
      tools.copy(_self, 'copy', id, id);
    });

    this.directory(
      this.templatePath('images'),
      this.destinationPath('images')
    );
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
