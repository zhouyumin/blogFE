<template>
  <div>
    <el-card
      shadow="hover"
      class="blog"
      v-loading.fullscreen.lock="fullscreenLoading"
    >
      <el-page-header @back="goBack" title="返回" :content="title">
      </el-page-header>
      <div v-html="source"></div>
    </el-card>
  </div>
</template>

<script>
import md from '@/utils/md.js'
import clipboard from '@/utils/clipboard.js'
import { getArchive } from '@/api/archive.js'
export default {
  name: 'MarkDown',
  data() {
    return {
      id: '',
      source: '',
      title: '',
      fullscreenLoading: false,
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
  activated() {
    if (this.id == this.$route.params.id) {
      return
    }
    this.id = this.$route.params.id
    this.fullscreenLoading = true
    getArchive(this.id)
      .then((res) => {
        this.source = md.render(res.data.data.content)
        this.title = res.data.data.title
        this.fullscreenLoading = false
      })
      .catch((err) => {
        this.fullscreenLoading = false
        this.$message.error('该博客不存在')
      })
  },
}
</script>

<style lang="less" scoped>
.blog {
  margin: 30px 0;
}
</style>
