const md = new markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    // 此处判断是否有添加代码语言
    // 得到经过highlight.js之后的html代码
    // 按照时间生成id
    const codeId = parseInt(Date.now()) + Math.floor(Math.random() * 10000000)
    let preCode = ''
    let isLang = lang && hljs.getLanguage(lang)
    if (isLang) {
      preCode = hljs.highlight(lang, str, true).value
    } else {
      preCode = md.utils.escapeHtml(str)
    }
    // 以换行进行分割
    const lines = preCode.split(/\n/).slice(0, -1)
    // 添加自定义行号
    let html = lines
      .map((item, index) => {
        return (
          '<li><span class="line-num" data-line="' +
          (index + 1) +
          '"></span>' +
          item +
          '</li>'
        )
      })
      .join('')
    html = '<ol>' + html + '</ol>'
    // 添加代码语言
    html += '<b class="name">' + lang + '</b>'
    return (
      `<button class="copy" data-clipboard-action="copy" data-clipboard-target="#copy${codeId}">复制</button>` +
      `<pre class="hljs" id="copy${codeId}">` +
      '<code>' +
      html +
      '</code>' +
      '</pre>'
    )
  },
})
export default md
