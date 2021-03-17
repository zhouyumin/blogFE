<template>
  <div>
    <el-row class="main" id="top">
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
    </el-row>
  </div>
</template>

<script>
import AsideRight from './AsideRight.vue'
export default {
  name: '',
  components: { AsideRight },
}
</script>

<style lang="less" scoped>
.main {
  background-color: #efefef;
}
</style>
