import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: 'Strapiv4 Boilerplate',
    logo: null
  },
  antd:{
    dark: true,
    compact: true
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
