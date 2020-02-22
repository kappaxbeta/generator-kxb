const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        const self = this;
        self.answers = await self.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your page name',
            default: 'page', // Default to solution folder name
        }]);

    }

    writing() {
        const self = this;

        self.fs.copyTpl(
            self.templatePath('page/container.js'),
            self.destinationPath( './pages/'  + self.answers.name + '/' +  self.answers.name + '.Container.js'),
            { name: self.answers.name },
        );

        self.fs.copyTpl(
            self.templatePath('page/state.js'),
            self.destinationPath( './pages/'  + self.answers.name + '/' +  self.answers.name + '.state.js'),
            { name: self.answers.name },
        );

        self.fs.copyTpl(
            self.templatePath('page/index.js'),
            self.destinationPath( './pages/'  + self.answers.name + '/' +  self.answers.name + '.js'),
            { name: self.answers.name },
        );


        self.fs.copyTpl(
            self.templatePath('page/package.json'),
            self.destinationPath( './pages/'  + self.answers.name + '/' + 'package.json'),
            { name: self.answers.name },
        );


    }
};
