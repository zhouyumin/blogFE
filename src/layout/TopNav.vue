<template>
  <div>
    <el-menu
      :mode="mode"
      :default-active="$route.path"
      router
      background-color="#888"
      text-color="cyan"
      active-text-color="#ffd04b"
      style="border: 0; opacity: 0.6"
    >
      <el-menu-item>
        <img src="/favicon.ico" class="img" />
      </el-menu-item>
      <el-menu-item index="/">
        <template #title>
          <i class="fa fa-fw fa-home"></i><span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/archive">
        <template #title>
          <i class="fa fa-fw fa-archive"></i><span>归档</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/category">
        <template #title>
          <i class="fa fa-fw fa-folder"></i><span>分类</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/about">
        <template #title>
          <i class="fa fa-fw fa-info-circle"></i><span>关于</span>
        </template>
      </el-menu-item>
      <el-menu-item @click="search">
        <template #title>
          <i class="fa fa-fw fa-search"></i>
          <span>搜索</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  components: {},
  props: ['mode'],
  data() {
    return { keyword: '' }
  },
  mounted() {},
  methods: {
    search() {
      this.$prompt('请输入要搜索的内容', '搜索', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(({ value }) => {
          this.keyword = value
          this.$router.push({
            name: 'search',
            params: { keyword: this.keyword },
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入',
          })
        })
    },
  },
}
</script>

<style lang="less" scoped>
.img {
  user-select: none;
  vertical-align: middle;
  width: 30px;
}
span {
  user-select: none;
  margin-left: 8px;
}
.el-menu-item {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  i {
    color: inherit;
  }
}
</style>
