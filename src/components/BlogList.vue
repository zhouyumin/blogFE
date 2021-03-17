<template>
  <div>
    <ol v-loading.fullscreen.lock="fullscreenLoading">
      <li v-for="archive in archives" :key="archive">
        <blog-card class="blog" :archive="archive" />
      </li>
    </ol>
    <el-empty
      v-show="archives.length <= 0"
      description="什么都没有"
      :image-size="200"
    ></el-empty>
    <el-pagination
      v-show="!($route.params.keyword != null)"
      class="pagination"
      background
      :layout="layout"
      :total="total"
      :current-page="data.page"
      :page-size="data.size"
      :page-sizes="[5, 7, 10]"
      :pager-count="5"
      @current-change="change"
      @size-change="sizeChange"
    />
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'
import { list } from '@/api/archive.js'
export default {
  name: '',
  components: { BlogCard },
  props: ['category', 'keyword'],
  data() {
    return {
      layout:
        document.body.clientWidth >= 915
          ? 'prev, pager, next, sizes, jumper'
          : 'prev, pager, next',
      fullscreenLoading: false,
      total: 100,
      archives: [],
      data: {
        page: 1,
        size: 5,
        category: this.category == null ? '' : this.category,
        keyword: this.keyword == null ? '' : this.keyword,
      },
    }
  },
  created() {
    this.getList(this.data)
  },
  activated() {
    //查询分类
    if (this.category != null && this.data.category != this.category) {
      this.data.category = this.category
      this.data.keyword = ''
      this.getList(this.data)
    }
  },
  methods: {
    getList(data) {
      this.fullscreenLoading = true
      list(data)
        .then((res) => {
          this.total = res.data.data[0]
          this.archives = res.data.data[1]
          this.fullscreenLoading = false
        })
        .catch((err) => {
          this.fullscreenLoading = false
          this.$message.error('网络错误')
        })
    },
    change(page) {
      this.data.page = page
      this.getList(this.data)
    },
    sizeChange(size) {
      this.data.size = size
      this.getList(this.data)
    },
  },
  watch: {
    // 关键字查询
    keyword: function (val) {
      if (val == null) return
      this.data.keyword = val
      this.data.category = ''
      this.getList(this.data)
    },
  },
}
</script>

<style scoped>
.blog {
  margin: 30px 0;
}
ol {
  padding-inline-start: 0;
}
li {
  list-style: none;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
