import { generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ReactCoreUiGeneratorSchema } from './schema';

function kebabToPascal(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const addExportOnIndexFile = ({
  projectRoot,
  tree,
  options,
  isSource = false,
}: {
  projectRoot: `${ReactCoreUiGeneratorSchema['libName']}`;
  tree: Tree;
  options: ReactCoreUiGeneratorSchema;
  isSource?: boolean;
}) => {
  const filePath = `${projectRoot}/src/index.ts`;

  const contents = tree.read(filePath).toString();

  const sourcePath = isSource
    ? `./components/${options.atomicScope}/${options.componentName}`
    : '@paybackapp/ui-core';
  const newContents = contents.replace(
    '',
    `export { ${kebabToPascal(options.componentName)} } from '${sourcePath}';\n`
  );
  tree.write(filePath, newContents);
};

export async function reactCoreUiGenerator(
  tree: Tree,
  options: ReactCoreUiGeneratorSchema
) {
  const projectRoot = options.libName;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    kebabToPascal,
    isMobileOnly: options.libName === 'packages/mobile',
    isWebOnly: options.libName === 'packages/web',
    isMultiPlatform: options.libName === 'packages/core',
    ...options,
  });

  // Add export on the index file
  const exportDestination =
    options.libName === 'packages/core'
      ? (['packages/core', 'packages/mobile', 'packages/web'] as const)
      : [options.libName];

  exportDestination.forEach((libName) => {
    addExportOnIndexFile({
      projectRoot: libName,
      tree,
      options,
      isSource: libName === options.libName,
    });
  });
}

export default reactCoreUiGenerator;
