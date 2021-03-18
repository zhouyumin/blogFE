<template>
  <div>
    <el-row class="main" id="evanyou-container">
      <el-col :span="13" :offset="3" :xs="{ span: 24, offset: 0 }">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </el-col>
      <el-col :span="4" :offset="2" class="hidden-xs-only">
        <el-affix :offset="90" style="margin-top: 30px">
          <aside-right></aside-right>
        </el-affix>
      </el-col>
      <canvas id="evanyou"></canvas>
    </el-row>
  </div>
</template>

<script>
import AsideRight from './AsideRight.vue'
import evanyou from '../utils/evanyou'
export default {
  name: '',
  components: { AsideRight },
  mounted() {
    evanyou()
  },
}
</script>

<style lang="less" scoped>
.main {
  z-index: 1;
  background-color: #efefef;
}
#evanyou {
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
