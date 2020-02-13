module.exports = {
  // 解析器 为了编译es6+语法
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  // 按需加载 element-ui之类的插件
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
