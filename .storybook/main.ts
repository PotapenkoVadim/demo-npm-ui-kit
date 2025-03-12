import type { StorybookConfig } from '@storybook/react-vite';
import svgr from '@svgr/rollup';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve!.alias || {}),
        '@': '/src',
      };
  
      config.plugins = [
        ...(config.plugins || []),
        svgr({ icon: true }),
      ];
    }

    return config;
  },
};
export default config;