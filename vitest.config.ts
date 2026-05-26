import type { TestUserConfig, ViteUserConfig } from 'vitest/config';

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    reporters: ['default', 'junit', 'github-actions'],
    outputFile: {
      junit: 'test-results/junit.xml'
    }
  }
};

export default config;
