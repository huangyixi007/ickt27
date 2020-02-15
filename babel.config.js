module.exports = {
  // 解析器 为了编译es6+语法
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  // 插件
  "plugins": [
    [
      // 按需加载组件的一部分 比如只使用element-ui中的Message 
      "component",
      // element-ui
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
