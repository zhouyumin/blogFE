<template>
  <div>
    <div id="paopao-container" class="gyx">
      <div class="maxim">
        <h1>“一直向上”</h1>
        <h1>“一直充满希望”</h1>
      </div>
      <canvas id="paopao"></canvas>
    </div>
  </div>
</template>

<script>
import paopao from '@/utils/paopao.js'
export default {
  name: 'HeadPage',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      paopao()
    })
  },
  methods: {},
}
</script>

<style lang="less" scoped>
div {
  user-select: none;
}
.gyx {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  /*flex 布局*/
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
  height: 360px;
  overflow: hidden;
  background: url(/bg.png) 50% 50% / cover;
}
#paopao {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.maxim {
  color: white;
  font-size: 1.5rem;
  font-family: '华文行楷', 'STXingkai', 'STXK';
}
</style>
