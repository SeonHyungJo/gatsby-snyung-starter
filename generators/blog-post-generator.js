const fs = require('fs');
const path = require('path');
const { inputRequired } = require('./utils');

const {tabList} = JSON.parse(fs.readFileSync('./meta-data/tabList.json'));

module.exports = plop => {
  plop.setGenerator('blog post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Blog post title?',
        validate: inputRequired('title'),
      },
      {
        type: 'list',
        name: 'postType',
        message: 'The type of blog post?',
        choices: tabList.map(tab => ({ name: tab.type, value: tab.type })),
      },
      {
        type: 'input',
        name: 'tags',
        message: 'tags? (separate with coma)',
      },
    ],
    actions: data => {
      data.createdDate = new Date().toISOString().split('T')[0];
      data.path = data.createdDate + '--' + data.title

      if (data.tags) {
        data.tags = `\ntags:\n  - ${
          data.tags.split(',')
            .filter(tag => tag != '')
            .map(tag => tag.trim())
            .join('\n  - ')
          }`;
      }

      return [
        {
          type: 'add',
          path: '../contents/{{postType}}s/{{path}}/index.md',
          templateFile: 'templates/blog-post-md.template',
        },
      ];
    },
  });
};
