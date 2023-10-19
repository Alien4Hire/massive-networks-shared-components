import { namespace } from './namespace.mjs';
import { componentPrompts } from './prompts/prompts.mjs';
import * as pkgDir from 'pkg-dir';

const appDir = await pkgDir.default();

export default async function (plop) {

  plop.setHelper('nameSpace', (value) => `${namespace}-${value}}`);

  plop.setGenerator('component', {
    description: 'A stencil component',
    prompts: [
      ...componentPrompts
    ],
    actions: [{
      type: 'addMany',
      destination: `${appDir}/src/components/{{dashCase (nameSpace componentName)}}`,
      templateFiles: 'component/**/*'
    }]
  });

}

 