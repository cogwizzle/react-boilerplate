/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint import/no-extraneous-dependencies: 0 */
const useReactGenerators = require('react-generator')

module.exports = (plop): void => {
  useReactGenerators(plop)

  // Write a functional component generator.
  plop.setGenerator('My Generator', {
    description: 'My generator description.',
    prompts: [
      {
        type: '', // input, number, confirm, list, rawList, expand, checkbox, password, editor
        name: '', // variable name you would like to refer to the prompted value as.
        message: '', // Prompt message for input.
      },
    ],
    actions: [
      {
        type: '', // add, modify
        path: '', // path on where to put the file.  Uses handlebars.
        template: ``, // Template of where the code should go.  Uses handlebars.
      },
    ],
  })

  // Write an empty reducer generator
  plop.setGenerator('My Generator 2', {
    description: 'My generator description 2.',
    prompts: [
      {
        type: '',
        name: '',
        message: '',
      },
    ],
    // Allows you to programatically generate the output.
    actions: (data) => {
      // Stop this from firing if you pass in test as the name.
      return [
        {
          type: '', // add, modify
          path: '', // path on where to put the file. Uses handlebars.
          templateFile: 'plop-templates/reducer.hbs', // Template file path.  Uses handlebars.
        },
      ]
    },
  })
}
