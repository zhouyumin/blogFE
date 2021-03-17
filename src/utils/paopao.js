const paopao = function () {
  let width, height, canvas, ctx, circles
  // Main
  width = document.getElementById('paopao-container').clientWidth // 调整为自己div的宽度
  height = document.getElementById('paopao-container').clientHeight // 调整为自己div的高度
  canvas = document.getElementById('paopao') // 这个是canvas标签的id
  canvas.width = width
  canvas.height = height
  ctx = canvas.getContext('2d')
  // create particles
  circles = []
  for (let x = 0; x < width * 0.2; x++) {
    let c = new Circle()
    circles.push(c)
  }
  animate()

  function animate() {
    ctx.clearRect(0, 0, width, height)
    for (let i in circles) {
      circles[i].draw()
    }

    requestAnimationFrame(animate)
  }
  // Canvas manipulation
  function Circle() {
    let _this = this
    // constructor
    ;(function () {
      _this.pos = {}
      init()
    })()
    function init() {
      _this.pos.x = Math.random() * width
      _this.pos.y = height + Math.random() * 100
      _this.alpha = 0.1 + Math.random() * 0.8
      _this.scale = 0.1 + Math.random() * 0.4
      _this.velocity = Math.random()
    }
    this.draw = function () {
      if (_this.alpha <= 0) {
        init()
      }
      _this.pos.y -= _this.velocity
      _this.alpha -= 0.0005
      ctx.beginPath()
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false)
      ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')'
      ctx.fill()
    }
  }
}
export default paopao
