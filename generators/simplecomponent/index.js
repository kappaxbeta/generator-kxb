const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        const self = this;
        self.answers = await self.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your component name',
            default: 'component', // Default to solution folder name
        }]);

    }

    writing() {
        const self = this;

        self.fs.copyTpl(
            self.templatePath('package.json'),
            self.destinationPath( 'components/' + self.answers.name + '/' + 'package.json'),
            { name: self.answers.name },
        );

        self.fs.copyTpl(
            self.templatePath('component.js'),
            self.destinationPath( 'components/' + self.answers.name + '/' + self.answers.name +'.js'),
            { name: self.answers.name },
        );
    }
};
