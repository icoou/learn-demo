// 添加文件戳
fis.match('*.{js,css,png}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  useSprite: true
});

fis.match('*.js', {
  // 进行js压缩
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // 进行css压缩
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // 进行png压缩
  optimizer: fis.plugin('png-compressor')
});
