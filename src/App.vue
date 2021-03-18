<template>
  <div>
    <div class="top">
      <el-button
        type="info"
        icon="fa fa-bars"
        v-show="mode == 'vertical'"
        @click="collapse"
        class="btn-right"
      ></el-button>
      <el-collapse-transition>
        <top-nav
          :mode="mode"
          v-show="mode == 'horizontal' || show"
          :class="mode == 'vertical' ? 'vertical' : ''"
        />
      </el-collapse-transition>
    </div>
    <head-page style="z-index: 101" />
    <router-view />
    <foot-page class="bottom" />
    <el-backtop style="right: 350px; z-index: 102">
      <el-tooltip content="返回顶部" placement="top">
        <el-button type="primary" icon="el-icon-caret-top" circle></el-button>
      </el-tooltip>
    </el-backtop>
  </div>
</template>

<script>
import TopNav from './layout/TopNav.vue'
import FootPage from './layout/FootPage.vue'
import HeadPage from './layout/HeadPage.vue'
export default {
  name: 'Vue',
  components: { HeadPage, FootPage, TopNav },
  data() {
    return {
      screenWidth: document.body.clientWidth,
      show: false,
    }
  },
  computed: {
    mode() {
      if (this.screenWidth <= 915) {
        return 'vertical'
      } else {
        this.show = false
        return 'horizontal'
      }
    },
  },
  mounted() {
    let that = this
    window.addEventListener('resize', function () {
      that.screenWidth = document.body.clientWidth
    })
  },
  methods: {
    collapse() {
      this.show = !this.show
    },
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val
    },
  },
}
</script>

<style scoped>
@import '@/css/base.css';
.top {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
}
.btn-right {
  float: right;
}
.vertical {
  width: 100px;
}
.bottom {
  z-index: 101;
  position: relative;
}
</style>
