#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync, cpSync, renameSync, readFileSync, writeFileSync } from 'fs';
import inquirer from 'inquirer';

const asyncExec = promisify(exec);

(async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const ora = (await import('ora')).default;
    const chalk = (await import('chalk')).default;

    const projectName = process.argv[2];

    if (!projectName) {
        console.error(chalk.red('Error: Please provide a name for your project.'));
        process.exit(1);
    }

    const spinner = ora();

    try {
        const projectPath = join(process.cwd(), projectName);
        mkdirSync(projectPath, { recursive: true });

        console.log(chalk.bold.green(`\n${projectName} directory created.\n`));

        const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'language',
            message: 'Which language would you like to use?',
            choices: ['Javascript', 'Typescript'],
        },]);

        const selectedTemplate = answers.language === 'Javascript' ? 'js-template' : 'ts-template';
        const selectedTemplatePath = resolve(__dirname, '..', 'templates', selectedTemplate);

        console.log();

        spinner.start(chalk.cyan(`Creating a new Express project with ${answers.language}`));
        cpSync(selectedTemplatePath, projectPath, { recursive: true });
        spinner.succeed();

        renameSync(
            join(projectPath, 'gitignore'),
            join(projectPath, '.gitignore')
        );
    
        const packageJsonPath = join(projectPath, 'package.json');
        const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
        packageJson.name = projectName.toLowerCase();
        writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        process.chdir(projectPath);
        spinner.start(chalk.cyan('Installing dependencies (this may take a moment)...'));
        await asyncExec('npm install');
        spinner.succeed(chalk.green('Dependencies installed!'));

        await asyncExec('git init');

        console.log(chalk.bold.green('\n🚀 Project is ready to use!'));
        console.log(chalk.bold('\nTo get started, run:'));
        console.log(chalk.blue(`  cd "${projectName}"`));
        console.log(chalk.blue('  npm run dev'));

        console.log(chalk.bold('\nTo test, run:'));
        console.log(chalk.blue('  npm test'));

    } catch (error) {
        spinner.fail(chalk.red('An error occurred during setup.'));
        console.error(error);
        process.exit(1);
    }
})()