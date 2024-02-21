import { defineConfig } from "father";

export default defineConfig({
  // esm: {},
  // cjs: {},
  umd: {
    entry: {
      "src/preset": {
        name: "DonePreset",
      },
      "src/deps": {
        name: "DoneDeps",
      },
    },
    extractCSS: true,
    externals: {
      react: "React",
      "react-dom": "ReactDom",
      "react-is": "ReactIs",
      antd: "Antd",
      "@designer/shared": "Done.Shared",
      "@designer/core": "Done.Core",
      "@designer/react": "Done.React",
      "@designer/settings-form": "Done.SettingsForm",
      "@formily/shared": "Formiy.Shared",
      "@formily/antd": "Formiy.Antd",
      "@formily/core": "Formiy.Core",
      "@formily/json-schema": "Formiy.JsonSchema",
      "@formily/react": "Formiy.React",
      "@formily/reactive": "Formiy.Reactive",
      "@formily/reactive-react": "Formiy.ReactiveReact",
    },
    chainWebpack(config) {
      config.optimization.minimize(false);
      return config;
    },
  },
});
