export interface ReactCoreUiGeneratorSchema {
  componentName: string;
  atomicScope: 'atoms' | 'molecules' | 'organisms' | 'layouts';
  libName: 'packages/core' | 'packages/mobile' | 'packages/web';
}
