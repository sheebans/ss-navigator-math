// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyMathJax: {
    src: ['{{ROOT}}/node_modules/mathjax/**/*'],
    dest: '{{WWW}}/assets/plugins/mathjax'
  },
  copyKatex: {
    src: ['{{ROOT}}/node_modules/katex/**/*'],
    dest: '{{WWW}}/assets/plugins/katex'
  }
}
