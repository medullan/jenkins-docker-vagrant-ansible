'use strict';

module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  var docsRepo = 'https://github.com/medullan/jenkins-docker-vagrant-ansible.wiki.git';
  var docManifest = {
      title: "Jenkins Docker CI (Vagrant Ansible)",
      github: pkg.repository.url,
      files: []
  };

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    bfdocs: {
      documentation: {
        options: {
          title: 'My Beautiful Documentation',
          manifest: docManifest,
          dest: 'docs/',
          theme: 'default'
        }
      }
    },
    clean:{
      docs: ['docs','jenkins-docker-vagrant-ansible.wiki']
    },
    gta: {
        cloneWiki: {
            command: 'clone ' + docsRepo,
            options: {
                stdout: true
            }
        }
    },
    'gh-pages': {
      options: {
        base: 'docs' ,
        message: 'Generated by grunt gh-pages'
      } ,
      src: ['**/*']
    }

  });

  require('load-grunt-tasks')(grunt);

  // grunt task for refreshing the list of markdown files when cloned from wiki
  grunt.registerTask('refreshFiles', 'Get refreshed list of files from wiki', function(){
    var gruntConfigProp = 'bfdocs';
    var markdown = [
      'jenkins-docker-vagrant-ansible.wiki/Home.md',
      'jenkins-docker-vagrant-ansible.wiki/*.md',
      '!jenkins-docker-vagrant-ansible.wiki/_Footer.md'
    ];
    var files = grunt.file.expand(markdown);
    docManifest.files = files;
    var bfdocs = grunt.config.get(gruntConfigProp);
    bfdocs.documentation.options.manifest = docManifest;
    grunt.config.set(gruntConfigProp, bfdocs);
    grunt.log.subhead("Complete. Latest documents are ready for processing!");
  });

  grunt.registerTask('docs', ['clean', 'gta:cloneWiki', 'refreshFiles', 'bfdocs']);
  grunt.registerTask('deploy', ['docs', 'gh-pages']);
  // By default, generate and deploy website
  grunt.registerTask('default', ['deploy']);
};
