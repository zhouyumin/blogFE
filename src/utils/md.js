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
    // 添加复制按钮
    const button = `<button class="copy ban-clipboard" data-clipboard-action="copy" data-clipboard-target="#copy${codeId}">复制</button>`
    // 添加代码语言
    const b = '<b class="name ban-clipboard">' + lang + '</b>'
    html = `<ol class="hljs" id="copy${codeId}">` + b + button + html + `</ol>`
    return html
  },
})
export default md
