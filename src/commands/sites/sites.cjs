// @ts-check
const { createSitesFromTemplateCommand } = require('./sites-create-template.cjs')
const { createSitesCreateCommand } = require('./sites-create.cjs')
const { createSitesDeleteCommand } = require('./sites-delete.cjs')
const { createSitesListCommand } = require('./sites-list.cjs')

/**
 * The sites command
 * @param {import('commander').OptionValues} options
 * @param {import('../base-command').BaseCommand} command
 */
const sites = (options, command) => {
  command.help()
}

/**
 * Creates the `netlify sites` command
 * @param {import('../base-command').BaseCommand} program
 * @returns
 */
const createSitesCommand = (program) => {
  createSitesCreateCommand(program)
  createSitesFromTemplateCommand(program)
  createSitesListCommand(program)
  createSitesDeleteCommand(program)

  return program
    .command('sites')
    .description(`Handle various site operations\nThe sites command will help you manage all your sites`)
    .addExamples(['netlify sites:create --name my-new-site', 'netlify sites:list'])
    .action(sites)
}

module.exports = { createSitesCommand }